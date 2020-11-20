class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["There was an error with your Email/Password combination. Please try again."], status: 401
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: { message: 'Logout successful' }
    else
      render json: {}, status: 404
    end
  end
end
