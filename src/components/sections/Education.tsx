import './Education.css';
import SectionContainer from '../ui/SectionContainer';
import type { EducationItem } from '@/types/content';

interface EducationProps {
  data: EducationItem[];
}

function Education({ data }: EducationProps) {
  return (
    <SectionContainer id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {data.map((item) => (
          <div key={item.id} className="education-item">
            <div className="education-item-date">{item.dateRange}</div>
            <div className="education-item-content">
              <div className="education-item-field">{item.fieldOfStudy}</div>
              <div className="education-item-institution">{item.institution}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Education;
