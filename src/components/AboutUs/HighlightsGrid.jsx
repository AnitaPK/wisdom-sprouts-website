// components/HighlightsGrid.js
import Image from 'next/image';
import './HighlightsGrid.css'; 

const highlightsData = [
  {
    image: '/aboutUs/One.png',
    title: 'Expert-Led Learning',
    description: 'Learn from real professionals with hands-on industry experience.',
    isDark: false,
  },
  {
    image: '/aboutUs/Two.png',
    title: 'Proven Placement Record',
    description: '70% of our students land jobs after completing their training.',
    isDark: true,
  },
  {
    image: '/aboutUs/Three.png',
    title: 'Strong Industry Connections',
    description: 'Partnered with 15+ companies and 35+ academic institutions.',
    isDark: false,
  },
  {
    image: '/aboutUs/Four.png',
    title: 'Recognized & Award-Winning',
    description: 'Featured by Silicon India & Higher Education Review as a top training institute.',
    isDark: true,
  },
  {
    image: '/aboutUs/Five.png',
    title: 'Focus on Practical Skills',
    description: 'Our hands-on approach prepares you for real-world challenges.',
    isDark: false,
  },
  {
    image: '/aboutUs/Six.png',
    title: 'Multi-City Presence with Local Advantage',
    description: 'Strategically located centers for both students and working professionals.',
    isDark: true,
  },
];

const HighlightsGrid = () => {
  return (
    <section className="highlightsSection py-5">

      <div className="container">
        <div className="row g-4">
          {highlightsData.map((highlight, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`cardWrapper 
                            ${highlight.isDark ? "darkCard" : "lightCard"}`}
              >
                <div className="card-body">
                  <div className="numberImageWrapper">
                    <Image
                      src={highlight.image}
                      alt={`Number ${index + 1}`}
                      width={60}
                      height={60}
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="cardTitle">{highlight.title}</h3>
                  <p className="cardDescription">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGrid;