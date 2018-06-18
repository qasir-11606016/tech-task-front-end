import React, { Component } from "react";
import Cloudy from "../assets/images/cloudy.png";
import Cel from "../assets/images/cel.png";
import Far from "../assets/images/far.png";

const styles = {
  weather: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  weatherType: {
    fontSize: 14,
    fontWeight: "bold"
  },
  paragraph: {
    margin: 0
  },
  weatherImage: {
    Width: 80
  },
  temp: {
    fontSize: 65
  },
  flex2: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.2
  },
  flex5: {
    flex: 0.5
  }
};

class weather extends Component {
  state = {
    celsius:true,
    farhen:false,
    temp:0
  };

  componentWillMount=()=>{
    const temperature=Math.ceil
    ((this.props.weather.currently.temperature -32)/1.8)
    this.setState({temp:temperature})
  }
  convertToFarhen =()=>{
    const temperature=Math.ceil
      (this.props.weather.currently.temperature )
    
  
      
      this.setState({celsius:false,farhen:true,temp:temperature})
    
    
  }
  convertToelsius =()=>{
    
   const temperature= Math.ceil(
      (
        this.props.weather.currently.temperature - 32) / 1.8
    )
    this.setState({celsius:true,farhen:false,temp:temperature})
  
  
}
  
  
  render() {
    return (
      <div>
        <div style={styles.weatherType}>
          <p style={styles.paragraph}>
            {this.props.weather && this.props.weather.currently.summary}
          </p>
        </div>
        <div style={styles.weather}>
          <div style={styles.flex2}>
            <div>
              {this.props.weather && (
                <img
                  src={require(`../assets/images/${
                    this.props.weather.currently.icon
                  }.png`)}
                  width={80}
                  alt={"Weather"}
                />
              )}
            </div>
            <div style={styles.weather}>
              <div id='hello' style={styles.temp}>
              {this.state.temp}
              </div>
              <div style={styles.weather}>
                <img src={Cel} width={25} height={25} onClick={()=>{this.convertToelsius()}} border={this.state.celsius ? 2 : 0}/>
                <img src={Far} width={25} height={25} onClick={()=>{this.convertToFarhen()}} border ={this.state.farhen ? 2 : 0} />
              </div>
            </div>
          </div>
          <div style={styles.flex5}>
            <p>{`Precipitation: ${this.props.weather &&
              this.props.weather.currently.precipProbability * 100}%`}</p>
            <p>{`Precipitation: ${this.props.weather &&
              this.props.weather.currently.humidity * 100}%`}</p>
            <p>{`Precipitation: ${this.props.weather &&
              this.props.weather.currently.windSpeed} km/h`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default weather;
