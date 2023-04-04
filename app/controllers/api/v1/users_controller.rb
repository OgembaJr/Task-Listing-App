class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user
  def index
    @users = User.all
    render json: @users, status: :ok
  end
  
  def authenticate_user
    redirect_to login_path unless current_user
  end
  
  # your other actions here
end
