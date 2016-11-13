import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron, ListGroup, ListGroupItem, Button, Glyphicon, Well, Badge} from 'react-bootstrap';
import ClassMenu from './ClassMenu.js'
import PatternMenu from './PatternMenu.js'
import {getPatterns} from './patterns.js'
import './App.css';
  
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedClass: "",
      classDone: false,
      patternDone: false,
      selectedPatternId: -1,
      patternStats: [],
      basket: [],
      skillList: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.getPatternStats = this.getPatternStats.bind(this);
  }
  
  handleChange(e) {
    if (e.target.id === "class") {
      this.setState(
        {selectedClass: e.target.value,
         classDone: true}
      )
    }
    if (e.target.id === "pattern") {
      this.getPatternStats(e.target.value);
      this.setState(
        {selectedPatternId: e.target.value,
         patternDone: true}
      )
    }
  }
  
  getPatternStats(id) {
    console.log("function rullz: " + id);
    let stats = [];
    let patternData = getPatterns();
    let juu = this.state.selectedClass;
    console.log(juu)
    stats.push({id: id,
                name: patternData[id].name,
                ac: patternData[id].ac,
                classCost: patternData[id].costs[juu]
    });
    this.setState({
      patternStats: stats
    });
  
    
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
        {/* Classin & patternin valinta*/}
        <Row>
            <Col md={4}>
              {this.state.classDone === false ?
                <ClassMenu handleChange={this.handleChange} /> :
                <h2>{this.state.selectedClass}</h2>}
              
              {this.state.patternDone === false ?
                <PatternMenu handleChange={this.handleChange} firstDone={this.state.classDone}/> :
                <h2>{this.state.patternStats[0].name} pattern ({this.state.patternStats[0].ac} AC)</h2>
              }
            </Col>
        
        {/*Trinkettien listaus*/}
          <Col md={4}> 
		  <h2>Available skills</h2>
             {this.state.classDone && this.state.patternDone ?
            
              <div>
				
			 <ListGroup>
				<ListGroupItem> Critical Attack <Button bsSize="xsmall"><Glyphicon glyph="minus" /></Button>
				<Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
				</ListGroupItem>
				<ListGroupItem> Disembowel <Button bsSize="xsmall"><Glyphicon glyph="minus" /></Button>
				<Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
				</ListGroupItem>
			  </ListGroup>
			  </div>
            
              
              :
              
			
            <div><p>No class and pattern selected!</p></div> 
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
			Total: 200
			</div>
			
			</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
