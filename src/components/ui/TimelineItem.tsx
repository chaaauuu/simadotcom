import './TimelineItem.css';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  dateRange: string;
  title: string | ReactNode;
  subtitle?: string;
  description: string;
  link?: string;
}

function TimelineItem({ dateRange, title, subtitle, description, link }: TimelineItemProps) {
  const content = (
    <div className="timeline-item">
      <div className="timeline-item-date">{dateRange}</div>
      <div className="timeline-item-content">
        <div className="timeline-item-header">
          {subtitle && <div className="timeline-item-subtitle">{subtitle}</div>}
          <h3 className="timeline-item-title">
            <span className="timeline-item-title-text">{title}</span>
          </h3>
        </div>
        <p className="timeline-item-description">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="timeline-item-link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default TimelineItem;
