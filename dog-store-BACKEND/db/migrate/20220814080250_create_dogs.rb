class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :Dogs do |t|
      t.string :name
      t.string :image
      t.integer :likes
      t.integer :dogsStore_id
    end
  end
end
