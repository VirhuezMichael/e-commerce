import "./ItemListContainer.css"
import {useState} from 'react';

const ItemListContainer = (props) => {
  return (
  <div className="greeting-container">
    <p className="greeting-greeting">{props.greeting}</p>
    <a className="button-slide"href="#">
      <div className="top">
        <span>Hover Me</span>
      </div>
      <div claaName="bottom">
        <span>Hover Me</span>
      </div>
    </a>
  </div>
  );
};

export default ItemListContainer;
