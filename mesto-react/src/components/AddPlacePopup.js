import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            name="cards"
            title="Новое место"
            buttonText="Создать"
            onClose={onClose}
        >
            <input className="popup__input popup__input_type_namecard" name="name" id="namecard-input" type="text"
                placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error namecard-input-error"></span>
            <input className="popup__input popup__input_type_link" name="link" id="link-input" type="url"
                placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;