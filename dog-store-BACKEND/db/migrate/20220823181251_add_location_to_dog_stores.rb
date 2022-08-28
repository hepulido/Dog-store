class AddLocationToDogStores < ActiveRecord::Migration[6.1]
  def change
    add_column :dog_stores, :location, :string
  end
end
