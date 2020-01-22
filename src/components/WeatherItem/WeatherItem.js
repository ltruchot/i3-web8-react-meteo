import React from 'react';
import PropTypes from 'prop-types';

class WeatherItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.changeDay(this.props.day.temps)}
        >
          {this.props.day.j}
        </button>
      </div>
    );
  }
}

WeatherItem.propTypes = {
  day: PropTypes.shape({
    j: PropTypes.string,
    temps: PropTypes.string,
  }).isRequired,
};

export default WeatherItem;
