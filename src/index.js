import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const name = ['Millennium Falcon', 'T1']

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('global')
);
