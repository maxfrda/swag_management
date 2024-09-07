class Order < ApplicationRecord
  before_save :set_price

  belongs_to :product

 def set_price
    self.price = product.price * quantity
  end
end
