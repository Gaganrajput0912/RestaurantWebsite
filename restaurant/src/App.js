import Card from './components/UI/Card';
import './App.css';
import React from 'react';
import Header from './components/Layout/Header';
function App() {
  return (
   <div>
    <Card>
      <React.Fragment>
      <Header></Header>
      </React.Fragment>
    </Card>
   </div>
  );
}

export default App;
