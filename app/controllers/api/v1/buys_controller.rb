class Api::V1::BuysController < ApiController
  def index
    render json: Buy.all
  end
end
