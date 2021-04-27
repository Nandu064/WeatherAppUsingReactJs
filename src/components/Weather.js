import React from "react";
import { Card } from 'react-bootstrap'
import styles from './Weather.module.css'
const Weather = props => {
  return (
    <div className="container text-dark">
      <div className="Card">
      {props.cityName ?
          <Card className={styles.ccard}>
            <Card.Header className={styles.cardHeader} as="h3">{props.cityName}</Card.Header>
              <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.ctitle}>Temperature Details</Card.Title>
                      <br></br>
                  <Card.Text>
                    <h5 className="py-4">
                      <i className={`wi ${props.weatherIcon} display-1`} />
                    </h5>
                      {props.temp_celsius ? (
                        <h1 className="py-2">Temp:-{props.temp_celsius}&deg;C</h1>
                      ) : null}
                          {maxminTemp(props.temp_min,props.temp_max)}
                    <h4 className="py-3">
                        {props.description.charAt(0).toUpperCase() +
                          props.description.slice(1)}
                      </h4>
                  </Card.Text>
              </Card.Body>
          </Card>
      :null}
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3 className={styles.minmax}>
        <span >Min Temp:-{min}&deg;C</span>
        <span >Max Temp:-{max}&deg;C</span>
      </h3>
    );
  }
}
