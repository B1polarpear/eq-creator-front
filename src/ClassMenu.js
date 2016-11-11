import React from 'react';
import {getClasses} from './classes.js';

export default function ClassMenu(props) {
  
  /* Haetaan muuttujaan classien nimet */
  const classList = getClasses();

  /* Iteroidaan listan läpi ja luodaan niistä HTMLää.
    classOptions-muuttujaa käytetään myöhemmin.
  */
  const classOptions = classList.map((a) => {
    return (
        <option value={a.name} key={a.name}>{a.name}</option>
    );
  })

  /*
    Palautetaan HTMLää ja funktiossa esitelty classOptions-vakio.
    Kun arvo muuttuu, onChange kutsuu handleChange-funktiota ja asettaa
    valinnan stateen.
  */
  return (
    <div>
      <h2>Select a class</h2>
      <select className="form-control" onChange={props.handleChange}>
        {classOptions}
      </select>
    </div>   
  );
}