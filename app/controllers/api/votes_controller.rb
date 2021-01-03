class Api::VotesController < ApplicationController

  private
  def vote_params
    params.require(:vote).permit(:is_upvoted?)
  end
end
