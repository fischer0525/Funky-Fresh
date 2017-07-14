class Api::V1::NewsController < ApiController
  def index
    render json: New.all

  end
end
