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
                                <img src="./images/projects/project3.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3> 맨체스터시티 선수정보 페이지 </h3>
                            <ul>
                                <li><b>주요기능</b> : <strong> 선수 기록 및 데이터 열람  </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="https://github.com/audrhks29/ManCity" target="_blank">바로가기</a></strong></li>
                                <li><b>page</b> : <strong> <a href="https://audrhks29.github.io/ManCity/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> react, styled-component </strong></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project1.png" alt="" />
                            </div>
                            <ul>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> 전기차 소식 공유 </h3>
                            <ul>
                                <li><b>주요기능</b> : <strong> 전기차 소식 공유, 전기차 TIP 조회 및 검색  </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="https://github.com/audrhks29/ElectCar" target="_blank">바로가기</a></strong></li>
                                <li><b>page</b> : <strong> <a href="https://audrhks29.github.io/ElectCar/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> react, styled-component </strong></li>

                            </ul>
                        </div>
                    </article>
                    {/*  */}
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project2.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3> 영화 API를 이용한 영화 검색 </h3>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 검색  </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="https://github.com/audrhks29/MegaBox" target="_blank">바로가기</a></strong></li>
                                <li><b>page</b> : <strong> <a href="https://audrhks29.github.io/MegaBox/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> REACT, styled-component </strong></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project4.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3> 도서 API를 이용한 도서관리 </h3>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 검색  </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="https://github.com/audrhks29/Semoseo" target="_blank">바로가기</a></strong></li>
                                <li><b>page</b> : <strong> <a href="https://audrhks29.github.io/Semoseo/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> REACT, styled-component </strong></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project2.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3> 영화 API를 이용한 영화조회 </h3>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 검색  </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="https://github.com/audrhks29/MegaBox" target="_blank">바로가기</a></strong></li>
                                <li><b>page</b> : <strong> <a href="https://audrhks29.github.io/MegaBox/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> REACT, styled-component </strong></li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="./images/projects/project2.png" alt="" />
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h3> 영화 API를 이용한 영화조회 </h3>
                            <ul>
                                <li><b>주요기능</b> : <strong> 조회, 검색  </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="https://github.com/audrhks29/MegaBox" target="_blank">바로가기</a></strong></li>
                                <li><b>page</b> : <strong> <a href="https://audrhks29.github.io/MegaBox/dist/" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> REACT, styled-component </strong></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </seciton>
    );
};