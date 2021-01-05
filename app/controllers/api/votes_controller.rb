class Api::VotesController < ApplicationController
  def create
    
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
