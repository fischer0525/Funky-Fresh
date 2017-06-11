class Api::V1::RootsController < ApiController
  def index
    render json: New.order("created_at DESC")
    render json: Event.order(event_date: DESC)
    render json: Product.all
    render json: Buy.order(:business_name)
    render json: Contributor.all
  end
end
