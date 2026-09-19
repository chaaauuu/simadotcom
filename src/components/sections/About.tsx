import './About.css';
import SectionContainer from '../ui/SectionContainer';
import type { AboutData } from '@/types/content';

interface AboutProps {
  data: AboutData;
}

function About({ data }: AboutProps) {
  return (
    <SectionContainer id="about">
      <div className="about-container">
        <div className="about-photo">
          <img
            src={data.photoUrl}
            alt={data.photoAlt}
            className="about-photo-img"
          />
        </div>
        <div className="about-info">
          <div className="about-info-row">
            <span className="about-info-label">LOCATION</span>
            <span className="about-info-value">Los Angeles, CA</span>
          </div>
          <div className="about-info-row">
            <span className="about-info-label">ELSEWHERE</span>
            <span className="about-info-value">
              <a href="https://www.instagram.com/souka.cko" target="_blank" rel="noopener noreferrer" className="about-info-link">Instagram</a>
              {", "}
              <a href="https://www.linkedin.com/in/sima-ghaddar-1b0a762a" target="_blank" rel="noopener noreferrer" className="about-info-link">LinkedIn</a>
            </span>
          </div>
        </div>
        <h2 className="section-title">About me</h2>
        <div className="about-bio">
          {data.bio.map((paragraph, index) => (
            <p
              key={index}
              className="about-paragraph"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
