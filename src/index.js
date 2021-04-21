import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const name = ['Millennium Falcon', 'Tie Fighter']

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('global')
);
