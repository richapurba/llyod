import React from 'react';
import './App.css';
import Home from "./Home";
import SignIn from "./SignIn";
// import GlobalStyle from "./GlobalStyles";

function App() {
  return (
	<>
		{/* <GlobalStyle /> #419a5a */}
		<div className="app">
			<Home />
			<SignIn />
		</div>
	</>
  );
}

export default App;