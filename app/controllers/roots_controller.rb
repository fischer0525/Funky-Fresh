class RootsController < ApplicationController
  def index
    @events = Event.order("event_date DESC")
    @news = New.order("created_at DESC")
    @products = Product.all
    @buys = Buy.order(:business_name)
    @contributors = Contributor.all
  end
end
