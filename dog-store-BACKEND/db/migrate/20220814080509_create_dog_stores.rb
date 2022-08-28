class CreateDogStores < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_stores do |t|
      t.string :name
    end
  end
end
