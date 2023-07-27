import styles from './visual.module.css'

export const Visual = () => {
    return (
        <section id="visual" className={styles.visual}>
            <div className={`inner ${styles.visual_inner}`}>
                <h2>
                    <span>MyungKwan's</span>
                    <span>PORTFOLIO</span>
                </h2>
                <p>새로운 분야에 도전할 수 있는 노력하는 프론트엔드 개발자가 되겠습니다.</p>
                <p>Next.js로 PORTFOLIO SITE를 제작하였습니다.</p>
            </div>
        </section>
    );
};
