import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import ClassMenu from './ClassMenu.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    /* 
      Stateen haetaan data factorystä ja
      pääkomponentti valuttaa sitä alaspäin.
      
      Nyt data on määritelty suoraan stateen.
    */
    this.state = {
      selectedClass: "",
      selectDone: false,
      selectedPattern: ""
    } 
    this.handleChange = this.handleChange.bind(this);
  }
  
  /*
    Funktio, joka muuttaa state, kun komponentilta tulee event (e)
    joka kertoo, että valittu joku classi.
  */
  handleChange(e) {
    this.setState(
    {selectedClass: e.target.value,
     selectDone: true}
    )
  }
  render() {
     /*
            // JSX-tyyli: komponentille annetaan parametrina dataa ylhäältä
            // ja tässä tapauksessa funktio renderöi näkyviin jotain datan
            // perusteella. <ClassMenu ../> yms.
            //
            // Jumbotronistakin voisi tehdä oman tiedostonsa, jos haluaisi.
            */
    
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h1>Imperial Custom Eq Workshop</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Col md={4}>
            {this.state.selectDone === false ?
              <ClassMenu handleChange={this.handleChange} /> :
              <h2>{this.state.selectedClass}</h2>
            }
          </Col>
          <Col md={4}>
             {this.state.selectDone === false ?
              <div></div> :
              <p>Tänne ilmestyy skillssit, kun on valittu classi</p>
            }
          </Col>
          <Col md={4}>
            <p>Täällä on basket</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
