import './Experience.css';
import SectionContainer from '../ui/SectionContainer';
import Timeline from '../ui/Timeline';
import type { ExperienceItem } from '@/types/content';

interface ExperienceProps {
  data: ExperienceItem[];
}

function Experience({ data }: ExperienceProps) {
  return (
    <SectionContainer id="experience">
      <h2 className="section-title">Experience</h2>
      <Timeline items={data} type="experience" />
    </SectionContainer>
  );
}

export default Experience;
