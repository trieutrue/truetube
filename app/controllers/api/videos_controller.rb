class Api::VideosController < ApplicationController
  def index
    # if 
    # @videos = User.find_by(id: params[:userId]).videos
    @videos = Video.all.includes(:uploader)
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end
  
  def create
    # debugger
    @video = current_user.videos.new(video_params)

    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = Video.find_by(id: params[:id])

    if @video && current_user.id == @video.uploader_id
      @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages
    end
  end

  def destroy
    @video = Video.find_by(id: params[:id]) 
    if @video && @video.uploader_id == current_user.id
      @video.destroy!
      render json: {message: "Sucess"}
    else
      render json: {message: "Failure"}
    end
  end
  
  private
  def video_params
    params.require(:video).permit(:title, :description, :submission)
  end
end
