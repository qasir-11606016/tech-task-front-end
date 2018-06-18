import React, { Component } from "react";
import moment from "moment";

const styles = {
  location: {
    fontSize: 24,
    fontWeight: "bold"
  },
  date: {
    fontSize: 14,
    fontWeight: "bold"
  },
  paragraph: {
    margin: 0
  }
};

const locationDate = props => {
  return (
    <div>
      <div style={styles.location}>
        <p style={styles.paragraph}>
          {props.weather && props.weather.timezone.split("/")[1]}
        </p>
      </div>
      <div style={styles.date}>
        <p style={styles.paragraph}>
          {props.weather &&
            moment.unix(props.weather.currently.time).format("dddd, hh:mm a")}
        </p>
      </div>
    </div>
  );
};

export default locationDate;
