import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children, title = '' }) {
    return (
        <section className={s.section}>
            <h1 className={s.title}>{title}</h1>

            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};

export default Section;