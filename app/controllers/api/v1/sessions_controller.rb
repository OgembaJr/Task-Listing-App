class Api::V1::SessionsController < ApplicationController
  before_action :initialize_flash

  def initialize_flash
    flash = {}
  end
  
    def new
      @user = User.new
    end

    def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged in successfully."
    else
      flash.now[:alert] = "Invalid email or password."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path, notice: "Logged out successfully."
  end  

end
  