import styles from './project.module.css'
export const Project = () => {
    return (
        <seciton id="projects" className={`con ${styles.project}`} >
            <div className="inner">
                <h2>Projects</h2>
                <div>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project1.png" alt="" />
                            </div>
                            {/* <ul>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                            </ul> */}
                        </div>
                        <div className={styles.detail}>
                            <h3> REACT 프로젝트 </h3>
                            <h4> 주제 : 탐라는 전기차 </h4>
                            <p>
                                <span>전기차 소식 공유 </span>
                            </p>
                            <ul>
                                <li><b>주요기능</b> : <strong> 전기차 소식 공유, 전기차 TIP 조회 및 검색  </strong></li>
                                {/* <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li> */}
                                {/* <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li> */}
                                <li><b>gitHub</b> : <strong> <a href="https://audrhks29.github.io/ElectCar/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> REACT, styled-component </strong></li>
                                {/* <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li> */}
                            </ul>
                        </div>
                    </article>
                    {/*  */}
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project2.png" alt="" />
                            </div>
                            {/* <ul>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                            </ul> */}
                        </div>
                        <div className={styles.detail}>
                            <h3> REACT 프로젝트 </h3>
                            <h4> 주제 : 영화 조회 </h4>
                            <p>
                                <span>영화 API를 이용한 영화조회</span>
                            </p>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 검색  </strong></li>
                                {/* <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li> */}
                                <li><b>gitHub</b> : <strong> <a href="https://audrhks29.github.io/MegaBox/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> REACT, styled-component </strong></li>
                                {/* <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li> */}
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </seciton>
    );
};