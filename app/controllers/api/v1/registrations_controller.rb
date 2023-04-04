class Api::V1::Auth::RegistrationsController < ApplicationController
    def signup
      user = User.create(user_params)
      if user.valid?
        token = JWT.encode({user_id: user.id}, Rails.application.secret_key_base)
        render json: {token: token}, status: :created
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
      end
    end
  