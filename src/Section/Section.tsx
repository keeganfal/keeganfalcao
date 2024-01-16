interface SectionProps {
    heading: string;
    children: React.ReactNode;
}

function Section(props: SectionProps) {
    return <section className="section">
        <div className="section-heading">{props.heading}</div> 
        {props.children}
        </section>;
}

export default Section;