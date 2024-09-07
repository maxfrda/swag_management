import React, { useState, useEffect } from 'react';
import AddOrderModal from './AddOrderModal';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  console.log(orders)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  const handleAddOrder = (newOrder) => {
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order: newOrder }), // Ensure you're sending the correct structure
    })
      .then(() => {
        // Refetch orders after adding a new one
        fetch('http://localhost:3000/orders')
          .then(response => response.json())
          .then(data => {
            setOrders(data);
            setIsModalOpen(false);
          });
      })
      .catch(error => console.error('Error adding order:', error));
  };
  return (
    <>
      <div className="flex items-center justify-between px-6">
        {/* Text Content */}
        <div className="w-2/5 pl-12">
          <p className="text-xl mb-6">
           FULLY CUSTOM / <span className="text-orange-500">OUTERWEAR</span>
          </p>
          <p className="text-5xl mb-6 font-bold">Your own custom jacket...jackpot!</p>
          <p className="text-xl leading-[1.75] mb-6">
            Jackets get used a lot and are ever so handy for those cold, breezy days. Why not let your brand be the outerwear star. Now you can.
          </p>
          <button className="bg-black text-white text-md px-8 py-2">GET STARTED</button>
        </div>

        {/* Image */}
        <img
          src="/images/sample-jacket.png"
          alt="Sample Jacket"
          className="w-1/2 object-contain"
        />
      </div>
      
      <div className="flex justify-center py-32">
        <img
          src="/images/icons.png"
          alt="Icons"
          className="w-1/2 object-contain mx-auto"
        />
      </div>

      <div className="bg-gray-100 p-8 h-1/4 w-2/3 flex  mx-auto">
        <div className="flex  justify-between  p-8">
        {/* Left side: Text with Button */}
          <div className="w-full pr-8">
            <p className="mb-6 leading-[2] text-lg">
              Create an outerwear piece your people will love and wear for years. One that fits your brand and flows with the rest of your merch. With a variety of materials, styles, and decorations, the options to customize are endless. Let’s get this outerwear party started!
            </p>
          <button className="bg-black text-white text-md px-8 py-2 mt-8"
           onClick={() => setIsModalOpen(true)}>
            START YOUR JACKET
          </button>
         </div>

        {/* Vertical pipe */}
          <div className="h-3/4 border-l-2 border-gray-400 mx-6"></div>

          {/* Right side: Specs / Timeline */}
          <div className="w-full pl-8">
            <p className="mb-8 text-3xl font-semibold">Specs / Timeline</p>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li><strong>150</strong> piece minimum</li>
              <li><strong>15</strong> day sample time</li>
              <li><strong>30</strong> day production (+ transit time)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">
      {/* "Add Item" Button */}
      <p className='text-4xl font-bold'>Your orders</p>

      {/* Modal Component */}
      <AddOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddOrder}
        products={products}
      />

      {/* Render the List of orders */}
      {
        orders.length === 0 ? 
        <div className='text-center mt-12 mb-24'>
          <p className='text-4xl'>No Orders...</p> 
        </div>
        :
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img src={order.product.image_url} alt={order.product.name} className="h-40 w-full object-contain rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{order.product.name}</h2>
              <p className="text-gray-700 mb-4">{order.product.description}</p>
              <p className="text-gray-700 mb-4"><strong>Quantity:</strong> {order.quantity}</p>
              <p className="text-lg font-bold text-indigo-600"><strong className="text-lg font-bold text-black mr-2">Cost:</strong>${order.price}</p>
            </div>
          </div>
        ))}
      </div>
      }

    </div>
    </>

  );
};

export default OrderList