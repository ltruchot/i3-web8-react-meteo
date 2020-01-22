import React from 'react';
import './App.css';
import WeatherItem from './components/WeatherItem/WeatherItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.meteo = [
      { j: 'lundi', temps: 'soleil' },
      { j: 'mardi', temps: 'pluie' },
      { j: 'mercedi', temps: 'nuage' },
      { j: 'jeudi', temps: 'soleil' },
      { j: 'vendredi', temps: 'soleil' },
      { j: 'samedi', temps: 'nuage' },
      { j: 'dimanche', temps: 'pluie' },
    ];
    const day = (new Date()).getDay();
    this.state = {
      selectedMeteo: this.meteo[day - 1].temps,
    };
  }

  render() {
    return (
      <div>
        <h2>
Meteo du jour:
          {' '}
          {this.state.selectedMeteo}
        </h2>
        {this.meteo.map((item) => (
          <WeatherItem
            key={item.j}
            day={item}
            changeDay={(temps) => this.setState({ selectedMeteo: temps })}
          />
        ))}
      </div>
    );
  }
}

export default App;
