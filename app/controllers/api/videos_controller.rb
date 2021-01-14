class Api::VideosController < ApplicationController
  def index
    if params[:search_query]
      render json: Video.query_videos(params[:search_query])
      return
    elsif params[:id]
      @videos = User.find_by(id: params[:userId]).videos
    else
      @videos = Video.all.includes(:uploader, :comments)
    end

    render :index
  end

  def show
    @video = Video.includes(:comments).find(params[:id]) 
    render :show
  end
  
  def create
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
      render json: {message: "Success"}
    else
      render json: {message: "Failure"}
    end
  end
  
  private
  def video_params
    params.require(:video).permit(:title, :description, :submission)
  end
end
