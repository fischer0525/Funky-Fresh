class Contributor < ApplicationRecord
  validates :contributor_img, presence: true
  validates :contributor_name, presence: true
  validates :contributor_bio, presence: true
end
