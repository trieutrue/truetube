class Api::VotesController < ApplicationController
  def index 
    case
    when params[:video_id]
      @votes = Vote.where(votable_id: params[:video_id], votable_type: 'Video')
    when params[:comment_id]
      @votes = Vote.where(votable_id: params[:comment_id, votable_type: 'Comment'])
    else
      @votes = Vote.all
    end

    render :index
  end

  def show
    @vote = Vote.find(params[:id])
    render :show
  end

  def create
    case
    when params[:video_id]
      @video = Video.find(params[:video_id])
      @vote = @video.votes.new(vote_params, votable_type: 'Video')
    when params[:comment_id]
      @vote = Comment.find(params[:comment_id]).votes.new(vote_params, votable_type: 'Comment')
    end

    @vote.voter_id = current_user.id

    if @vote.save
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update
    @vote = Vote.find_by(id: params[:id])
    if @vote && current_user.id == @vote.voter_id
      @vote.update(vote_params)
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find_by(id: params[:id])
    @video = Video.find(@vote.votable_id)
    if @vote && current_user.id == @vote.voter_id
      @vote.destroy!
      render json: @video
    else
      render json: { message: 'Failure' }
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:is_upvoted?)
  end
end
