class SessionsController < Devise::SessionsController  
  respond_to :html, :json


  def respond_with(resource, opts = {})
    resource = nil unless resource.id
    render json: resource # Triggers the appropriate serializer
  end


  def destroy
    warden.logout
    render 'layouts/application.html.erb'
  end

end
