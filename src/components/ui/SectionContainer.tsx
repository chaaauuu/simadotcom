import './SectionContainer.css';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
}

function SectionContainer({ children, id }: SectionContainerProps) {
  return (
    <section className="section-container" id={id}>
      {children}
    </section>
  );
}

export default SectionContainer;
