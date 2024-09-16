import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg from '../img/about-img.png'
import QuoteImg from '../img/quote.svg'
import Sponsors from './Sponsors';
import Best_1 from '../img/nominations/nominations_1.png';
import Best_2 from '../img/nominations/nominations_2.png';
import Best_3 from '../img/nominations/nominations_3.png';
import Best_4 from '../img/nominations/nominations_4.png';
import Best_5 from '../img/nominations/nominations_5.png';
import Best_6 from '../img/nominations/nominations_6.png';
import Best_7 from '../img/nominations/nominations_7.png';
import Best_8 from '../img/nominations/nominations_8.png';
import Best_9 from '../img/nominations/nominations_9.png';
import Best_10 from '../img/nominations/nominations_10.png';

const comments = [
  {
    name: "О премии",
    title: "Silver Phoenix Awards",
    comment: "Международная премия в области кино и телевидения «Silver Phoenix Awards» — это событие, которое с 2019 года занимает особое место в мире кинематографа и телевидения."
  },
  {
    name: "Особенности",
    title: "Международный характер",
    comment: "«Silver Phoenix Awards» зарекомендовала себя как премия, которая символизирует высочайший профессионализм и новаторство, привлекая внимание профессионалов и ценителей искусства со всего мира."
  },
  {
    name: "Церемония",
    title: "Культурное событие",
    comment: "Церемония награждения «Silver Phoenix Awards» — это не просто вручение наград, но и настоящее культурное событие, обсуждают будущее кино и телевидения, делятся новыми идеями."
  }
];

const nominationsData = [
  {
    title: 'Лучший международный фильм',
    icon: Best_1,
  },
  {
    title: 'Лучший дебютный фильм',
    icon: Best_2,
  },
  {
    title: 'Лучший актер',
    icon: Best_3,
  },
  {
    title: 'Лучшая актриса',
    icon: Best_4,
  },
  {
    title: 'Лучший телевизионный проект',
    icon: Best_5,
  },
  {
    title: 'Лучший сериал',
    icon: Best_6,
  },
  {
    title: 'Лучший сценарист',
    icon: Best_7,
  },
  {
    title: 'Лучший режиссер',
    icon: Best_8,
  },
  {
    title: 'Лучший композитор',
    icon: Best_9,
  },
  {
    title: 'Лучший продюсер',
    icon: Best_10,
  }
];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="main-title">Международная премия в области кино и телевидения «Silver Phoenix Awards»</h1>
          <p className="sub-title">Выбор профессионалов</p>
        </div>
      </div>

      <section className="new-section">
        <div className="content-wrapper">
          <div className="image-container">
            <img src={AboutImg} alt="Cinematography" className="main-image" />
          </div>
          <div className="text-container">
            <h2 className="section-title">О премии «Silver Phoenix Awards»</h2>
            <p className="description">
            Международная премия в области кино и телевидения «Silver Phoenix Awards» — это событие, которое с 2019 года занимает особое место в мире кинематографа и телевидения. Учрежденная Ассоциацией продюсеров кино и телевидения, премия была создана с целью признания и поддержки самых значимых достижений в индустрии. За эти годы «Silver Phoenix Awards» стала одной из самых престижных международных наград, привлекая внимание профессионалов и ценителей искусства со всего мира.
            </p>
            <Link to="/about" className="more-about-btn">Больше о нас</Link>
          </div>
        </div>
      </section>

      <section className="background-section">
        <div className="centered-content">
          <h2 className="centered-title">Ежегодная премия Silver Phoenix Awards проходит 3 июня и является значимым событием в мире кино и телевидения, объединяющим лучших профессионалов отрасли.</h2>
          {/* <p className="centered-text">«Silver Phoenix Awards» зарекомендовала себя как премия, которая символизирует высочайший профессионализм и новаторство. Ежегодно на церемонию приезжают самые талантливые режиссеры, актеры, сценаристы, продюсеры и другие мастера кино и телевидения, чьи работы не только вдохновляют, но и изменяют восприятие искусства на глобальном уровне. Победители премии получают признание не только коллег, но и широкой мировой аудитории.</p> */}
        </div>
      </section>

      <section className="nominations-section">
      <h2 className='title'>Номинации Silver Phoenix Awards</h2>
      <div className="nominations-home-grid">
        {nominationsData.map((nomination, index) => (
          <div key={index} className="nomination-card">
            <img src={nomination.icon} alt={nomination.title} className="nomination-icon" />
            <h3 className="nomination-title">{nomination.title}</h3>
            <ul className="criteria-list">
            </ul>
          </div>
        ))}
      </div>
    </section>

    <Sponsors />

        <section className="comments-section">
        <div className="comments-header">
          <h2>Отзывы о «Silver Phoenix Awards»</h2>
        </div>
        <div className="comments-cards">
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
               <div className="comment-icon">
                <img src={QuoteImg} alt="Quote Icon" />
              </div>
              <p className="comment-text">{comment.comment}</p>
              <h4 className="comment-author">{comment.name}</h4>
              <p className="comment-title">{comment.title}</p>
            </div>
          ))}
        </div>
      </section>

    
    </>
  );
};

export default Home;
