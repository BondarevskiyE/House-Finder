import React from 'react';
import Header from './Header';
import Main from './Main';
import Favorites from './Favorites';
import HouseDescription from './HouseDescription';
import NotFound from './notFound'
import { Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/house/:houseId" component={HouseDescription} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}


export default App;
