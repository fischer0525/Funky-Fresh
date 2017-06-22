class New < ApplicationRecord
  validates :news_title, presence: true
  validates :news_description, presence: true

  def created_at
    self[:created_at].strftime("%A: %x")
  end
end
