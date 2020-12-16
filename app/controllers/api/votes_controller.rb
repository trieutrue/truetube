class Api::VotesController < ApplicationController
  def create
    case
    when params[:video_id]
      @vote = Video.find(params[:video_id]).votes.new(vote_params, votable_type: 'Video')
    when params[:comment_id]
      @vote = Comment.find(params[:comment_id]).votes.new(vote_params, votable_type: 'Comment')
    end

    @vote.voter_id = current_user.id

    if @vote.save
      render json: { message: 'Success' }
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update
    @vote = Vote.find_by(id: params[:id])
    if @vote && current_user.id == @vote.voter_id
      @vote.update(vote_params)
      render json: { message: 'Success' }
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find_by(id: params[:id])
    if @vote && current_user.id == @vote.voter_id
      @vote.destroy!
      render json: { message: 'Success' }
    else
      render json: { message: 'Failure' }
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:is_upvoted?)
  end
end
