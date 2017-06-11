class CreateBuys < ActiveRecord::Migration[5.0]
  def change
    create_table :buys do |t|
      t.string :business_name, null: false
      t.string :business_url
      t.string :business_description, null: false
      t.string :business_address, null: false
      t.string :business_city, null: false
      t.string :business_state, null: false
      t.string :business_zip, null: false
    end
  end
end
