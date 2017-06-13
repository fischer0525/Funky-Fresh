class Api::V1::ContributorssController < ApiController
  def index
    render json: Contributors.all
  end
end
