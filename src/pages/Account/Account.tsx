import {FC} from 'react'
import styles from './Account.module.scss'
import Logo from '../../components/Logo'
import {prices} from './utils'
import Loader from '../../components/Loader'
import { useNavigate } from 'react-router'
import Header from '../../components/Header'

const Account: FC = () => {
	const navigate = useNavigate()
	const logout = () => {
		localStorage.clear()
		navigate('/viewer/homepage')
	}

	return (
		<main className={styles.container}>
			<div className={styles.opacityBox}>
				<div className={styles.contentBox}>
					
					<Header/>

					<div className={styles.content}>
						<div className={styles.account}>
							<div className={styles.form}>

									<div className={styles.title}>
										Личный кабинет
									</div>
									
									<div className={styles.infoBox}>
										<span className={styles.label}>Аккаунт</span>
										<div className={styles.infocontainer}>
											<div className={styles.info}> 
											
											<div className={styles.iconContainer}>
												<div className={styles.icon}>
													<img src="../images/user.svg" alt="user" />
												</div>
											</div>

											<div className={styles.user}>
												<span>test@mail.ru</span>
											</div>
											<div className={styles.dot}></div>
											
											<div 
												className={styles.logout}
												onClick={logout}
												>	Выйти из аккаунта</div>
											</div>
										</div>
									</div>

									<div className={styles.generationBox}>
										<span className={styles.label}>Покупка генераций</span>
										<div className={styles.prices}>
											{
												prices.map((price: any) => (
													<div className={styles.priceContainer}>
														<span className={styles.priceNumber}>{price.price}</span>
														<span className={styles.priceValue}>{price.value}</span>
													</div>
												))
											}
										
										</div>
									
									</div>
									<div className={styles.buttonGroup}>
										<div className={styles.buttonPrimary}>
											Купить генерации
										</div>
									</div>

									<div className={styles.accountFooter}>
										<span>Сгенерировано 10 скачиваний</span>
										<span>Осталось 5 скачиваний</span>
									</div>

							</div>
						</div>
					</div>
				</div>
				
			</div>
		</main>
	)
}

export default Account