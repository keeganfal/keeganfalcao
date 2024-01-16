interface SectionContainerProps {
    children: React.ReactNode;
}

function SectionContainer(props: SectionContainerProps) {
    return <div className="section-container">
        {props.children}
        </div>;
}

export default SectionContainer;