class ListingsController < ApplicationController
  
  def index
    respond_with Listing.all
  end

  def create
    respond_with Listing.create(listing_params)  
  end

  def show
    respond_with Listing.find(params[:id])
  end

  private

  def listing_params
    params.require(:listing).permit(:name, :city,:featured,:ameneties)
  end
end
