class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :name
      t.string :city
      t.boolean :featured
	  t.text :ameneties, :limit => 16777215	  
      t.timestamps null: false
    end
  end
end
