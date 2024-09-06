import React from 'react';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="main-title">Международная премия в области кино и телевидения «Silver Phoenix Awards»</h1>
          <p className="sub-title">Выбор профессионалов</p>
        </div>
      </div>

      {/* New Section Below */}
      <section className="new-section">
        <div className="content-wrapper">
          <div className="image-container">
            <img src="./img/main-bg.jpg" alt="Cinematography" className="main-image" />
          </div>
          <div className="text-container">
            <h2 className="section-title">We Like To Create High-Quality Cinematography</h2>
            <p className="description">
              There Are Many Variations Of Lorem Ipsum Available, By Injected Humour, Or Randomised Words. Lorem Ipsum, You Need Be Sure There Isn’t 
              Anything Embarrassing Hidden Iddlof Text. All The Lorem Ipsum Generators On The Internet.
            </p>
            <button className="more-about-btn">More About</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
