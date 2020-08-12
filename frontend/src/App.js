import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
            <header className="header">
               <div className="brand">
                   <button onClick={openMenu}> 
                       &#9776;
                   </button>
                   <a href="index.html">Kiara</a>
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
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product" />
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product" />
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product" />
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/n1.jpeg" alt="product"/>
                            <div className="product-name">
                            <a href="product.html">Summer Dress</a>
                        </div>
                            <div className="product-brand">Zara</div>
                            <div className="product-price">$100</div>
                            <div className="product-rating">4.5 Stars(10 reviews)</div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            </main>
            <footer className="footer">
                All Rights Reserved.
            </footer>
        </div>
  );
}

export default App;
