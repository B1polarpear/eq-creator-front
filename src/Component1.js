import React from 'react';

/*
  Funktio saa parametrinä olion, jonka kautta päästään
  kiinni statessa määriteltyihin ominaisuuksiin.
  
  Funktio palauttaa HTML (JSX) -koodia.
*/
export default function Component1(props) {
  return (
    <p>{props.data[0].eka} {props.data[0].toka}</p>
  );
}