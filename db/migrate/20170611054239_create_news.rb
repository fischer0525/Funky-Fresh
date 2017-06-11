class CreateNews < ActiveRecord::Migration[5.0]
  def change
    create_table :news do |t|
      t.string :news_img
      t.string :news_title, null: false
      t.string :news_date, null: false
      t.string :news_description, null: false
      t.timestamps
    end
  end
end
