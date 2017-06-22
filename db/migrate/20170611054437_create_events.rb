class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :event_img, null: false
      t.string :event_title, null: false
      t.datetime :event_datetime, null: false
      t.string :event_description, null: false
      t.string :event_address, null: false
      t.string :event_city, null: false
      t.string :event_state, null: false
      t.string :event_zip, null: false
      t.string :event_url
      t.timestamps
    end
  end
end
