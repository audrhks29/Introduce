import styles from './skills.module.css'
import './skills.css'
export const Skills = () => {
    const skillList = [
        { id: 1, text: "HTML", css: "html", per: "95%" },
        { id: 2, text: "HTML", css: "html", per: "95%" },
        { id: 3, text: "HTML", css: "html", per: "95%" },
        { id: 4, text: "HTML", css: "html", per: "95%" },
        { id: 5, text: "HTML", css: "html", per: "95%" },
        { id: 6, text: "HTML", css: "html", per: "95%" },
    ]
    const imgList = [
        { id: 1, imgurl: '', text: '' }
    ]
    return (
        <section id="skills" className={`con ${styles.skills_wrap}`}>
            <div className="inner">
                <h2>Skills </h2>
                <div className={styles.skills_box}>
                    <article>
                        <div className={styles.skill_box}>
                            <span className={styles.title}>HTML</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} html`}>
                                    <span className={styles.tooltip}>95%</span>
                                </span>
                            </div>
                        </div>
                    </article>
                    <article>
                        <ul className={styles.list}>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};