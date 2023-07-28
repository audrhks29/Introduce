import styles from './skills.module.css'
import './skills.css'
export const Skills = () => {
    const skillList = [
        { id: 1, text: "HTML5", css: "html", per: "95%", imgurl: 'html5.png' },
        { id: 2, text: "CSS3", css: "css", per: "95%", imgurl: 'css.png' },
        { id: 3, text: "JavaScript", css: "javascript", per: "60%", imgurl: 'js.png' },
        { id: 4, text: "React", css: "react", per: "85%", imgurl: 'react.png' },
    ]
    // const imgList = []
    return (
        <section id="skills" className={`con ${styles.skills_wrap}`}>
            <div className="inner">
                <h2>Skills </h2>
                <div className={styles.skills_box}>
                    <article>
                        <div className={styles.skill_box}>
                            {
                                skillList.map(item => (
                                    <div key={item.id}>
                                        <span className={styles.title}>{item.text}</span>
                                        <div className={styles.skill_bar}>
                                            <span className={`${styles.skill_per} ${item.css}`}>
                                                <span className={styles.tooltip}>{item.per}</span>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </article>
                    <article>
                        <ul className={styles.list}>
                            {
                                skillList.map(item => (
                                    <li key={item.id}>
                                        <img src={`./images/skills/${item.imgurl}`} alt="" />
                                    </li>
                                ))
                            }
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};