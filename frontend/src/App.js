import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderList from './components/OrderList';
import './App.css';


function App() {
  return (
    
    <Router>
          <header className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://go.kotisdesign.com/wp-content/uploads/2021/03/kotis-design-logo-orange.svg"
            alt="Kotis Design Logo"
            className="h-8" // Adjust size as needed
          />
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
            Login
          </button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<OrderList />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;