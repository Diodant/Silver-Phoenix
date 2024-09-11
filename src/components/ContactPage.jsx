import React from 'react';
import PageHeader from './PageHeader';

const ContactPage = () => {
  return (
    <>
    <PageHeader title="Контакты" breadcrumb="Контакты" />
    <div className="contact-page">
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Ваше имя</label>
          <input type="text" id="name"  />

          <label htmlFor="email">Ваш email</label>
          <input type="email" id="email"  />

          <label htmlFor="subject">Тема</label>
          <input type="text" id="subject"  />

          <label htmlFor="message">Ваше сообщение (необязательно)</label>
          <textarea id="message" ></textarea>

          <button type="submit" className="submit-btn">Отправить</button>
        </form>
      </div>

      <div className="contact-info-container">
        <div className="contact-info">
          <h3>Адрес</h3>
          <p>Ассоциация продюсеров кино и телевидения (АПКиТ)</p>
          <p>Москва, Мосфильмовская улица, 27</p>
        </div>

        <div className="contact-info">
          <h3>Телефон</h3>
          <p>+7 495 225 57 04</p>
        </div>

        <div className="contact-info">
          <h3>Почта</h3>
          <p>ap_kit@gmail.com</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
