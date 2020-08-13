import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
               <div className="brand">
                   <button onClick={openMenu}> 
                       &#9776;
                   </button>
                   <Link to="/">Kiara</Link>
                   {/* <a href="index.html">Kiara</a> */}
               </div>
               <div className="header-links">
                <a href="cart">Cart</a>
                <a href="signin.html">Signin</a>
               </div>
              
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Heels</a>
                    </li>
                    <li>
                        <a href="index.html">Hand bags</a>

                    </li>
                    
                    
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/products/:id" component={ProductScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                    
                
            </div>
            </main>
            <footer className="footer">
                All Rights Reserved.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
