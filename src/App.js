import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron, ListGroup, ListGroupItem, Button, Glyphicon, Well, Badge, ProgressBar} from 'react-bootstrap';
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
    const now = 200;
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h1>Imperial Custom Eq Workshop</h1>
          </Jumbotron>
        </Row>
        {/* Classin & patternin valinta*/}
        <Row>
            <Col md={4}>
            {this.state.selectDone === false ?
              <ClassMenu handleChange={this.handleChange} /> :
              <h2>{this.state.selectedClass}</h2>
            }
        <h2>Select a pattern</h2>
        <select required>
            <option value="silk">Silk</option>
            <option value="suede">Suede</option>
            <option value="leather">Leather</option>
        </select>
          </Col>
        
        {/*Trinkettien listaus*/}
          <Col md={4}> 
		  <h2>Trinkets</h2>
             {this.state.selectDone === false ?
            
            <div></div> :
              
			<div>
				
			 <ListGroup>
				<ListGroupItem> Critical Attack <Button BsSize="xsmall"><Glyphicon glyph="minus" /></Button>
				<Button BsSize="xsmall"><Glyphicon glyph="plus" /></Button>
				</ListGroupItem>
				<ListGroupItem> Disembowel <Button BsSize="xsmall"><Glyphicon glyph="minus" /></Button>
				<Button BsSize="xsmall"><Glyphicon glyph="plus" /></Button>
				</ListGroupItem>
			  </ListGroup>
			  </div>
            }
          </Col>
          <Col md={4}>
            <h2>Basket</h2>
			<div>
			
			<Well>
			{this.state.selectDone === false ?
            
            <div></div> :
			<ListGroup>
				<ListGroupItem>Critical Attack <Badge>2</Badge></ListGroupItem>
				<ListGroupItem>Parry <Badge>6</Badge></ListGroupItem>
			</ListGroup>
			
			}
			</Well>
			<div>
			<ProgressBar max="400" now={now} label={`${now}`} />
			</div>
			
			</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
