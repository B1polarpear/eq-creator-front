import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron, ListGroup, ListGroupItem, Well, Badge} from 'react-bootstrap';
import ClassMenu from './ClassMenu.js'
import PatternMenu from './PatternMenu.js'
import {getPatterns} from './patterns.js'
import {SkillList} from './SkillList.js'
import './App.css';
  
class App extends Component {
  constructor(props) {
    super(props);
  
    /* STATE */
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
  
  /* Function for events */
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
  
  /* Function for fetching pattern stats on class/pattern choice */
  getPatternStats(id) {
    let stats = [];
    let patternData = getPatterns();
    let classNameValue = this.state.selectedClass;
    stats.push({id: id,
                name: patternData[id].name,
                ac: patternData[id].ac,
                classCost: patternData[id].costs[classNameValue]
    });
    this.setState({
      patternStats: stats
    });      
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h1>Imperial Custom Eq Workshop</h1>
          </Jumbotron>
        </Row>
        <Row>
            
            {/* Classin & patternin valinta*/}
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
                  <SkillList /> :
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
