import React from "react";

function ImagePopup({ onClose, isOpen, card }) {
  return (
    <div className={`popup popup_type_photo ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__photo-container">
        <img className="popup__photo" src={card.src} alt={card.title} />
        <h3 className="popup__photo-title">{card.title}</h3>
        <button onClick={onClose} type="button" className="popup__close popup__close_type_photo">
        </button>
      </div>
    </div>
  )
}

export default ImagePopup;