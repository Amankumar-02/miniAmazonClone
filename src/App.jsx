import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <header className='nav'>
      <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
      <img src="/icons8-amazon-100.png" alt="" />
      <h2 style={{color:"#FBB97F"}}>Amazon.in</h2>
      </div>
      <div className='navSearch'>
        <input type="search" placeholder='Search'/>
      </div>
      <div className='navBtn'>
        <button>LogIn</button>
        <button>SignIn</button>
        <button>Cart</button>
      </div>
    </header>
    <main>
    <div className='App'>      
      {cards.map(item => (
        <div className='container' key={item.id}>
          <div className="img"><img src={item.image} alt={item.title} /></div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Rating: {item.rating?.rate}</p>
          <h3>Price: {item.price}</h3>
        </div>
      ))}
    </div>
    </main>
    <footer className='footer'>
    <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
      <img src="/icons8-amazon-100.png" alt="" />
      <h2 style={{color:"#FBB97F"}}>Amazon.in</h2>
      </div>
      <div>
        <h2 style={{color:"#FBB97F"}}>All Right are reserved. 2024</h2>
      </div>
      <div className='navBtn'>
        <button>LinedIn</button>
        <button>GitHub</button>
        <button>FaceBook</button>
      </div>
    </footer>
      </>
  );
}

export default App;
