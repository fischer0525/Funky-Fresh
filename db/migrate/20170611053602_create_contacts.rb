class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :contact_number
      t.string :subject, null: :false
      t.string :message, null: false
      t.timestamps
    end
  end
end
