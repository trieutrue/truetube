class Api::CommentsController < ApplicationController
  def index
    case
    when params[:video_id]
      @comments = Comment.where(video_id: params[:video_id])
    when params[:comment_id]
      @comments = Comment.where(parent_comment_id: params[:comment_id])
    else
      @comments = Comment.all
    end

    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    case
    when params[:video_id]
      @comment = Video.find(params[:video_id]).comments.new(comment_params)
    when params[:comment_id]
      @comment = Comment.find(params[:comment_id]).comments.new(comment_params)
    end

    @comment.author_id = current_user.id
    
    if @comment.save 
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment && current_user.id == @comment.author_id
      @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment && current_user.id == @comment.author_id
      @comment.destroy!
      render json: { message: "Success" }
    else
      render json: { message: "Failure" }
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
