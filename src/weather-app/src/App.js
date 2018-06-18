import React, { Component } from "react";
import LocationDate from "./components/locationDate";
import Weather from "./components/weather";
import "./App.css";
import Loader from "react-loader-spinner";

const styles = {
  center: {
    textAlign: "center"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: null
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
    }
  };
  showPosition = position => {
    const { latitude, longitude } = position.coords;
    const apiKey = "ce382ac592137d5c8cc57cc2f7f7983b";
    let url = "https://api.darksky.net/forecast/&apiKey/&lat,&long";
    url = url.replace("&apiKey", apiKey);
    url = url.replace("&lat", latitude);
    url = url.replace("&long", longitude);
    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({ weather: data });
      });
  };
  render() {
    return (
      <div className="App" style={!this.state.weather ? styles.center : null}>
        {this.state.weather ? (
          <div>
            <LocationDate weather={this.state.weather} />
            <Weather weather={this.state.weather} />
          </div>
        ) : (
          <div>
            <Loader type="Oval" color="#00BFFF" height="100" width="100" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
