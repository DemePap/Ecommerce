import React from 'react';
import { useState } from 'react';
import Router from './router/Router';



function App() {
  const [allRoutes, setAllRoutes] = React.useState([])
  return <Router allRoutes={allRoutes} />
}

export default App;
