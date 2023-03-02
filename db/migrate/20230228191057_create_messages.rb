class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.references :conversation, null: false, foreign_key: true
      t.integer :sender_id
      t.integer :recipient_id
      t.text :body

      t.timestamps
    end
  end
end
