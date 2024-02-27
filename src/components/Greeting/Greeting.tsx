import React, {FC} from "react";

import styles from './Greeting.module.scss'
import { useNavigate } from "react-router";
const Greeting: FC = () => {
	const isAuth = false
	let role = localStorage.getItem('role')
	const navigate = useNavigate();
	
	return (
		<section className={styles.greet}>
			
			<div className={styles.greetContent}>
				
				<div className={styles.titleSection}>
					<span className={styles.title}>Создавайте идеальные презентации</span>
					<span className={styles.titleColor}> вместе с ПрезентаторAi</span>
				</div>

				<div className={styles.titleSectionMobile}>
					<span className={styles.title}>Создавайте идеальные презентации</span>
					<span className={styles.titleColor}> с помощью Ai</span>
				</div>

				<span className={styles.greetHint}>Нужно только зарегистрироваться...</span>

				<div className={styles.buttonGroup}>
					{
						role == 'viewer' || !role  ? (
							<div className={styles.buttonPrimary}
							onClick={() => navigate('/viewer/generation')}
							>Попробовать бесплатно</div>
						) : (
							<div className={styles.buttonPrimary}
							onClick={() => navigate('/user/generation')}
							>Начать генерацию</div>
						)
					}
					
					<div className={styles.greetingButtonLabel}>
						<a className={styles.buttonLink} href="#more">Узнать больше</a>
						<img src='../images/arrow_down.svg' alt='paint' />
					</div>
				</div>

			</div>

			<div className={styles.imageSection}>
				<img src='../images/paint-kit-front-gradient.png' alt='paint' />
			</div>
		</section>
	)
}

export default Greeting