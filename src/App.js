import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    //it's not HTML; it's a language called JSX that can represent HTML in JavaScript. 
    // Normally you can't add HTML to JavaScript, at least without making it a string.
    // But it won't break the code in this case, because you're using webpack and React.
    <div>
      <Nav></Nav>
        <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
