/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import '../stylesheets/Testimonie.css'

function Testimonie(props){
  return (
    <div className='testimonie-container'>
      <img className='testimonie-image'
      src={require(`../images/testimonio-${props.image}.png`)}
      alt='emma-photo' />

      <div className="text-container-testimonie">
        <p className="testimonie-name">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="testimonie-position">
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className="testimonie-text">
          "{props.testimonie}"
        </p>
      </div>
    </div>
  );
}

export default Testimonie;