class Api::V1::NewsController < ApiController
  def index
    @new = New.order(created_at: :DESC)
    render json: @new

  end
end
