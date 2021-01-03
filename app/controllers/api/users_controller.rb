class Api::UsersController < ApplicationController
  def index 
    @user = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    @videos = @user.videos
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user && current_user.id == @user.id
      @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy 
    @user = User.find_by(id: params[:id])

    if @user && current_user.id == @user.id
      @user.destroy!
      render json: {message: "Sucessfully deleted!"}
    else
      render json: {message: "There was an error..."}
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :channel_name, :password)
  end
end
