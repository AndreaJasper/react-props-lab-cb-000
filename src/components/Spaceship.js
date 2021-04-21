import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  const name = ['Millennium Falcon', 'TIE Fighter', 'X-Wing', 'Separatist Dreadnought', 'Imperial Shuttle']
  const speed = ['slow', 'lightspeed', 'moderate']
  const hasRockets = ['yes', 'no']
  const colors = ['silver', 'black', 'red', 'orange']
  
  Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: 'false',
    colors: ['black', 'red']
  };
  
  render () {
    return (
      <p>{this.props.name}</p>  
      <p>{this.props.speed}</p>
      <p>{this.props.rockets}</p>
      <p>{this.props.colors}</p>
    );
  }
 
}


