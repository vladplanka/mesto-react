import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setisAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);

  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onImagePopup={handleCardClick}
      />
      <Footer />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />

      {/* <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__edit">Вы уверены?</h2>
          <form name="card-form" className="popup__form" noValidate>
            <button type="submit" className="popup__save">Да</button>
          </form>
          <button type="button" className="popup__close">
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
