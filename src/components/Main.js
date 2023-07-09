import React from "react";
import { useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onImagePopup }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getDataProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(
          cards.map((card) => ({
            id: cards._id,
            src: card.link,
            title: card.name,
            likes: card.likes.length
          }))
        )
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" type="button" aria-label="Изменить" onClick={() => { onEditAvatar(true) }}></button>
        <img className="profile__avatar" src={userAvatar} />
        <div className="profile__profile-info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={() => { onEditProfile(true) }}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={() => { onAddPlace(true) }}></button>
      </section>

      <section className="elements">
        {
          cards.map(({ id, ...props }) => (
            <Card
              key={id}
              onImagePopup={onImagePopup}
              {...props}
            />
          ))
        }
      </section>

    </main>
  )
}

export default Main;