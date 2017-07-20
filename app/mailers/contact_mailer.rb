class ContactMailer < ApplicationMailer
  def new_contact(review)
    @review = review
    mail(
      to: "FunkyFreshPhilly@Gmail.com",
      subject: "New Message"
    )
  end
end
