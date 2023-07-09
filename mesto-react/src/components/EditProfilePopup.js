import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            onClose={onClose}
        >
            <input className="popup__input popup__input_type_name" name="name" id="name-input" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_type_job" name="about" id="about-input" type="text" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;