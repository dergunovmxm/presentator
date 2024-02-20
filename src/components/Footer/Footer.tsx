import React, {FC} from "react";
import styles from './Footer.module.scss'
import Logo from "../Logo";
import { icons } from "./utils";
const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerInfo}>
					<Logo />
					<div className={styles.footerInfoItem}>
						<span className={styles.footerInfoTitle}>Контакты</span>
						<span className={styles.footerInfoLink}>+7 (982)836-76-76</span>
						<span className={styles.footerInfoLink}>presentai@gmail.com</span>
					</div>
					<div className={styles.footerInfoItem}>
						<span className={styles.footerInfoTitle}>Продукт</span>
						<span className={styles.footerInfoLink}>Сгенерировать презентацию</span>
						<span className={styles.footerInfoLink}>Купить генерации</span>
						<span className={styles.footerInfoLink}>Личный кабинет</span>
					</div>
					<div className={styles.footerInfoItem}>
						<span className={styles.footerInfoLink}>Мы в соцсетях</span>
						<div className={styles.socialWeb}>
							{
								icons.map((icon) => (
										<img className={styles.socialWebIcon} src={icon.src} alt='socialWebIcon' />
								))
							}
						</div>
					
					</div>
				</div>
				<div className={styles.footerImageContainer}>
					<img className={styles.footerImage} src='../images/footer.png' alt='FOOTER' />
				</div>
				
			</div>

		</footer>
	)
}

export default Footer