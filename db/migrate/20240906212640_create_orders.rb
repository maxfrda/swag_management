class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :quantity
      t.string :image_url
      t.string :category
      t.decimal :price
        
      t.timestamps
    end
  end
end
