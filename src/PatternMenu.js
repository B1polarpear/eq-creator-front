import React from 'react';
import {getPatterns} from './patterns.js';

export default function PatternMenu(props) {
  const patternList = getPatterns();
  
  const patternOptions = patternList.map((a) => {
    return (
        <option value={a.id} key={a.id}>{a.name}</option>
    );
  })
  /*
  
    Palautetaan HTMLää ja funktiossa esitelty classOptions-vakio.
    Kun arvo muuttuu, onChange kutsuu handleChange-funktiota ja asettaa
    valinnan stateen.
  */
  return (
    <div>
    <h2>Select a pattern</h2>
      {props.firstDone === true ? 
         <select className="form-control" id="pattern" onChange={props.handleChange}>
          <option>Choose</option>
          {patternOptions}
        </select>
        : 
        <select className="form-control" id="pattern" onChange={props.handleChange} disabled></select>}  
    </div>   
  );
}