import "./style.css";

const Section = ({title, body, extraHeaderContetn}) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContetn}
        </div>
       {body}
    </section>
);

export default Section
