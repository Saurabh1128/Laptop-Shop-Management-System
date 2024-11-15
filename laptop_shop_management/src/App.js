import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Card  from './Component/Card';
import Carousel from './Component/Carousel';
function App() {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <h2 class="text-center">New Upcomming Products</h2>
    <Card></Card>
    </div>
  );
}

export default App;
