class Api::CommentsController < ApplicationController
  def index
    case
    when params[:video_id]
      @comments = Video.find(params[:video_id]).comments
    when params[:comment_id]
      @comments = Comment.find(params[:comment_id]).comments
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
    if params[:video_id]
      @comment = Video.find(params[:video_id]).comments.new(comment_params)
    elsif params[:comment_id]
      @comment = Comment.find(params[:comment_id]).comments.new(comment_params)
    else
      @comment = Comment.all
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
      render json: { message: "Sucess" }
    else
      render json: { message: "Failure" }
    end
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
