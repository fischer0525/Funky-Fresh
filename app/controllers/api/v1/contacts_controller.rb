class Api::V1::ContactsController < ApiController
  def index
    render json: Contact.all
  end

  def create
    contact = Contact.new(contact_params)
    contact.save
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :contact_number, :message)
  end

end
