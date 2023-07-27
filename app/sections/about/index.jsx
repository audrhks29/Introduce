import styles from './about.module.css'
import { AiFillGithub } from 'react-icons/ai';
export const About = () => {
    return (
        <section id='about' className={`con`}>
            <div className='inner'>
                <h2>About Me</h2>
                <div>
                    <div className={styles.about_wrap}>
                        <article className={styles.pic}>
                            <img src="./images/about/img1.jpg" alt="" />
                        </article>
                        <article className={styles.desc}>
                            <h3>이명관<span>Myung-Kwan Lee</span></h3>
                            <ul>
                                <li><b>이름</b>:<strong>이명관</strong></li>
                                <li><b>연락처</b>:<strong>010-0000-0000</strong></li>
                                <li><b>생년월일</b>:<strong>1998.01.01</strong></li>
                                <li><b>주소</b>:<strong>인천광역시</strong></li>
                                <li><b>이메일</b>:<strong>audrhks29@gmail.com</strong></li>
                                <li><b>학력</b>:<strong>초대졸</strong></li>
                                <li><b>자격증</b>:<strong>컴퓨터활용능력2급</strong></li>
                            </ul>
                            <p>
                                <a href="#" target='_blank'><i><AiFillGithub /></i></a>
                                <a href="#" target='_blank'><i><AiFillGithub /></i></a>
                            </p>
                        </article>
                    </div>
                    <div className={styles.about_bottom}>
                        Backend를 목표로 하는 주니어 개발자입니다.<br />
                        Frontend를 공부하고 열심히 개발에 대한 관심사를 넓혀나가고 있습니다.<br />
                        성실하게 , 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고 싶습니다.
                    </div>
                </div>
            </div>
        </section>
    );
};
