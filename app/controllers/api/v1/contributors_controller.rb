class Api::V1::ContributorsController < ApiController
  def index
    render json: Contributor.all
  end
end
