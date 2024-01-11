import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./features/home/components/footer/footer";
import Navbar from "./features/home/components/navbar/navbar";
import Section from './features/home/components/hero-section/hero-section';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Section />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
