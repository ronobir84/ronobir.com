import './Skills.css';
import { skills } from '../../assets/Data';

const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className="section__title">
                Professional Skills
            </h2>
            <p className="section__subtitle">
                My <span>Talent</span>
            </p>


            <div className='skills__container container grid'>
                {skills.map(({ name, percentage, description }, index) => {
                    return (
                        <div className="skills__item" key={index}>
                            <div className="skills__title">
                                <h3 className="skills__name">{name}</h3>
                                <span className="skills__number">
                                    {percentage}
                                    <span> %</span>
                                </span>

                            </div>

                            <p className="skills__description">{description}</p>

                            <div className="skills__bar">
                                <span className="skills__percentage" style={{width: `${percentage}%`}}>
                                    <span></span>
                                </span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    );
};

export default Skills;