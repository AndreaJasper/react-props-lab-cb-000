import React from 'react';

class Spaceship extends React.Component {
  
  render () {
    return (
      <div className="spaceship-card">
        <h3>{this.props.name}</h3>  
        <p>Speed: {this.props.speed}</p>
        <p>Rockets {this.props.hasRockets.to_string()}</p>
        <p>Colors: {this.props.colors.join(',')}</p>
      </div>
    )
  }
}
  
  Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: 'false',
    colors: ['black', 'red']
  }
}

export default Spaceship;


import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className = "spaceship-card">
        <h3>{this.props.name}</h3>
        <p>Speed: {this.props.speed}<br />
        Rockets? {this.props.hasRockets.toString()}<br />
        Color Scheme: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;