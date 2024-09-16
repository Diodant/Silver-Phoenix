import React from 'react';
import sponsor1 from '../img/sponsors/sponsor1.png';
import sponsor2 from '../img/sponsors/sponsor2.png';
import sponsor3 from '../img/sponsors/sponsor3.png';
import sponsor4 from '../img/sponsors/sponsor4.png';
import sponsor5 from '../img/sponsors/sponsor5.png';
import sponsor6 from '../img/sponsors/sponsor6.png';
import sponsor7 from '../img/sponsors/sponsor7.png';
import sponsor8 from '../img/sponsors/sponsor8.png';
import sponsor9 from '../img/sponsors/sponsor9.png';
import sponsor10 from '../img/sponsors/sponsor10.png';

const sponsors = [
  { src: sponsor1, alt: 'Sponsor 1' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor4, alt: 'Sponsor 4' },
  { src: sponsor5, alt: 'Sponsor 5' },
  { src: sponsor6, alt: 'Sponsor 6' },
  { src: sponsor7, alt: 'Sponsor 7' },
  { src: sponsor8, alt: 'Sponsor 8' },
  { src: sponsor9, alt: 'Sponsor 9' },
  { src: sponsor10, alt: 'Sponsor 10' },
];

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-logo">
            <img src={sponsor.src} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
