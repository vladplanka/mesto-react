import React from "react";

function Card(props) {
  const { onImagePopup } = props;
  return (
    <div className="elements__element-card">
      <button type="button" className="elements__element-trash"></button>
      <img onClick={onImagePopup.bind(null, props)} className="elements__element-picture" src={props.src} alt={props.title} />
      <div className="elements__element-card-content">
        <h2 className="elements__element-text">{props.title}</h2>
        <div className="elements__element-like-container">
          <button type="button" className="elements__element-like"></button>
          <div className="elements__element-like-count">{props.likes}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;