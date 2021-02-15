import React from 'react';
import './App.css';
import Home from "./Home";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
	<>
		<GlobalStyle />
		<div className="app">
		<Home />
		</div>
	</>
  );
}

export default App;
