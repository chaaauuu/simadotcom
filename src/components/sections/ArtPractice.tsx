import './ArtPractice.css';
import SectionContainer from '../ui/SectionContainer';
import Carousel from '../ui/Carousel';
import type { ArtPracticeItem } from '@/types/content';

interface ArtPracticeProps {
  data: ArtPracticeItem[];
}

function ArtPractice({ data }: ArtPracticeProps) {
  return (
    <SectionContainer id="artPractice">
      <h2 className="section-title">Art practice</h2>
      <p className="section-description">Hand-cut paper collages on cotton rag paper.</p>
      <Carousel items={data} />
    </SectionContainer>
  );
}

export default ArtPractice;
