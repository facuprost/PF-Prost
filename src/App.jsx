import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [loading, setLoading] = useState(true);

  
  const asyncMock = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); 
    });
  };

  useEffect(() => {
    asyncMock().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;



