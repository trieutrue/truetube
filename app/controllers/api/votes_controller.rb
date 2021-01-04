class Api::VotesController < ApplicationController
  def create
    
  end

  def update
    @vote = Vote.find_by(id: params[:id])
    if @vote && current_user.id == @vote.voter_id
      @vote.is_upvoted? ? @vote.update(is_upvoted?: false) : @vote.update(is_upvoted?: true)
      render json: { msg: 'Success' }
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy

  end
end
