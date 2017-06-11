class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :event_img, null: false
      t.string :event_title, null: false
      t.date :event_date, null: false
      t.string :event_description, null: false
      t.string :event_location, null: false
      t.string :event_url
      t.timestamps
    end
  end
end
