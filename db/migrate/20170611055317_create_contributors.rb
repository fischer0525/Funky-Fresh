class CreateContributors < ActiveRecord::Migration[5.0]
  def change
    create_table :contributors do |t|
      t.string :contributor_img, null: false
      t.string :contributor_name, null: false
      t.string :contributor_bio, null: false
      t.string :contributor_url
    end
  end
end
