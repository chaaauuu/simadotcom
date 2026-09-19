import './Timeline.css';
import TimelineItem from './TimelineItem';
import type { ExperienceItem } from '@/types/content';

interface TimelineProps {
  items: ExperienceItem[];
  type: 'experience';
}

function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => {
        const titleContent = (
          <>
            {item.role} @{' '}
            {item.link ? (
              <a
                href={item.link}
                className="timeline-item-company-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.company}
              </a>
            ) : (
              item.company
            )}
          </>
        );
        return (
          <TimelineItem
            key={item.id}
            dateRange={item.dateRange}
            title={titleContent}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Timeline;
