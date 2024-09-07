import React, { useState } from 'react';

const AddOrderModal = ({ isOpen, onClose, onAdd, products }) => {
  const [newOrder, setNewOrder] = useState({
    product_id: '',
    quantity: 1,
  });

  const selectedProduct = products.find(product => product.id === parseInt(newOrder.product_id));

  const handleAddOrder = () => {
    onAdd(newOrder);
    setNewOrder({ product_id: '', quantity: 1 });
  };

  if (!isOpen) return null;

  // Calculate total cost by multiplying product price with quantity
  const totalCost = selectedProduct ? (selectedProduct.price * newOrder.quantity).toFixed(2) : '0.00';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Order</h2>

        {/* Product Selection */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Product:</label>
          <select
            value={newOrder.product_id}
            onChange={(e) => setNewOrder({ ...newOrder, product_id: e.target.value })}
            className="w-full border rounded px-3 py-2 mt-1"
          >
            <option value="" disabled>Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - ${product.price}
              </option>
            ))}
          </select>
        </div>

        {/* Display Product Image */}
        {selectedProduct && (
          <div className="mb-4">
            <img
              src={selectedProduct.image_url}
              alt={selectedProduct.name}
              className="w-full h-48 object-contain mb-4"
            />
          </div>
        )}

        {/* Quantity Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Quantity:</label>
          <input
            type="number"
            min="1"
            value={newOrder.quantity}
            onChange={(e) => setNewOrder({ ...newOrder, quantity: parseInt(e.target.value) })}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        {/* Display Total Cost */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Total Cost: ${totalCost}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={handleAddOrder}
            disabled={!newOrder.product_id || newOrder.quantity < 1}
          >
            Add Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOrderModal;
