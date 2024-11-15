import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';

function App() {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <h2 class="text-center">New Upcomming Products</h2>
                <div class="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/watch?v=MRbqLWAwqko" 
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                </div>
            
    </div>
  );
}

export default App;
