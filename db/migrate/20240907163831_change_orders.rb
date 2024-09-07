class ChangeOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :image_url
    remove_column :orders, :category
  end
end