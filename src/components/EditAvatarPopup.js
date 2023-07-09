import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            onClose={onClose}
        >
            <input className="popup__input popup__input_type_link" name="avatar" id="avatar-input" type="url"
                placeholder="Ссылка на аватар" required />
            <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>

    )
}

export default EditAvatarPopup;