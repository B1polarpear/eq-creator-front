import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import Component1 from './Component1.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /* 
      Stateen haetaan data factorystä ja
      pääkomponentti valuttaa sitä alaspäin.
      
      Nyt data on määritelty suoraan stateen.
      (defaultMessage, dataToComponent)
    */
    this.state = {
      defaultMessage: "This is default data coming from state",
      dataToComponent: [
        {eka: "Juuh",
        toka: "elikkäs"}
      ]
    } 
  }
  render() {
     /*
            // JSX-tyyli: komponentille annetaan parametrina dataa ylhäältä
            // ja tässä tapauksessa funktio renderöi näkyviin jotain datan
            // perusteella. <Component1 ../> yms. Itse komponentti löytyy
            // tiedostosta Component1.js
            //
            // Jumbotronistakin voisi tehdä oman tiedostonsa, jos haluaisi.
            */
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h1>{this.state.defaultMessage}</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Col md={6}>
           
            <Component1 data={this.state.dataToComponent} />
          </Col>
          <Col md={6}>
            <p>Juuh elikkäs</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
