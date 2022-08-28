class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :image
      t.integer :likes
      t.integer :dog_store_id
    end
  end
end
