class CreateDogsStore < ActiveRecord::Migration[6.1]
  def change
    create_table "dogs_store", force: :cascade do |t|
      t.string "name"
    end
  end
end
