class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :product_title, null: false
      t.string :product_img, null: false
      t.string :product_description, null: false
    end
  end
end
