import Card from './components/UI/Card';
import './App.css';
import React from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
function App() {
  return (
   <div>
    <Card>
      <React.Fragment>
      <Header></Header>
      <main>
<Meals></Meals>
      </main>
      </React.Fragment>
    </Card>
   </div>
  );
}

export default App;
