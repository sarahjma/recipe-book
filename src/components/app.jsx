import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {

  const APP_ID = '306a5454';
  const APP_KEY = '8ad0c36e728475bfaa8e6a43b43a284a';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log('Effect has been run');
  });

  return (
    <div className="App">
      <form classNAME="search-form">
        <input className="search-bar" type="text" />
        <buttton className="search-button" type="submit">
          Search
        </buttton>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
