import React, {FC, useState} from "react";
import styles from './Footer.module.scss'
import Logo from "../Logo";
import { icons, iconsMobile } from "./utils";
const Footer: FC = () => {

	const [visibleProducts, setVisibleProducts] = useState(true)
	const [visibleContacts, setVisibleContacts] = useState(true)
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerInfo}>
					<div className={styles.footerLogo}>
						<Logo />
					</div>		
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

				{/* Разметка для мобильной версии */}
						
				<div className={styles.footerInfoMobile}>
					<div className={styles.footerInfoItem}>
						<div onClick={() => setVisibleProducts(!visibleProducts)}> 
							<span className={styles.footerInfoTitle}>Продукт</span>
							<img className={styles.arrow} src={visibleProducts ? '../images/arrow_up.svg' : '../images/arrow_down.svg'	}/>
						</div>
						{
							visibleProducts ? (
								<>
									<span className={styles.footerInfoLink}>Сгенерировать презентацию</span>
									<span className={styles.footerInfoLink}>Купить генерации</span>
									<span className={styles.footerInfoLink}>Личный кабинет</span>
								</>
							) : (
								<></>
							)
						}
							
					</div>

					<div className={styles.footerInfoItem}>
						<div onClick={() => setVisibleContacts(!visibleContacts)}>
							<span className={styles.footerInfoTitle}>Контакты</span>
							<img className={styles.arrow} src={visibleContacts ? '../images/arrow_up.svg' : '../images/arrow_down.svg'	}/>
						</div>
						{
							visibleContacts ? (
								<>
									<span className={styles.footerInfoLink}>+7 (982)836-76-76</span>
									<span className={styles.footerInfoLink}>presentai@gmail.com</span>
													
						<div className={styles.socialWeb}>
							{
								iconsMobile.map((icon) => (
										<img className={styles.socialWebIcon} src={icon.src} alt='socialWebIcon' />
								))
							}
						</div>
								</>
							) : (
								<></>
							)
						}
						
	
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