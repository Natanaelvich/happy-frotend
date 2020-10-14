import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateOrphanage from '../pages/CreateOrphanage/CreateOrphanage';

import Home from '../pages/Home';
import MapOrphanages from '../pages/Map';
import Orphanage from '../pages/Orphanage/Orphanage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/map" component={MapOrphanages} />
      <Route path="/orphanage/:orphanageId" component={Orphanage} />
      <Route path="/orphanage_create" component={CreateOrphanage} />
    </Switch>
  );
};

export default Routes;
