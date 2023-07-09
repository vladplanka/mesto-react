import React from "react";

function PopupWithForm({ name, title, children, buttonText, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__edit">{title}</h2>
        <form name={name} className="popup__form popup__form_type_profile" noValidate>
          {children}
          <button type="submit" className="popup__save">{buttonText}</button>
        </form>
        <button type="button" className="popup__close popup__close_type_profile" onClick={onClose}>
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm;