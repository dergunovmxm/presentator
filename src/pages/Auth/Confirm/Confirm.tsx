import {FC} from 'react'
import styles from './Confirm.module.scss'
import { useNavigate } from 'react-router'
import { Formik } from 'formik'
import { Form } from 'react-router-dom'

const Confirm: FC = () => {
	const navigate = useNavigate()
	return(
		<main className={styles.container}>
			<div className={styles.opacityBox}>
					<div className={styles.content}>
						<div className={styles.logo}
							onClick={() => navigate('/viewer/homepage')}
						>
							<span>Презентатор</span>
							<span className={styles.color}>AI</span>
						</div>

						<Formik			
							initialValues={{
								first:'',
								second: '',
								third: '',
								fourth: ''
							}}
							onSubmit={() => {
								console.log('values')
							}}
						>
							{({errors, touched}) => (
								<Form className={styles.form}>
									<div className={styles.formContainer}>
										<div className={styles.title}>Подтверждение регистрации</div>
										<div className={styles.subtitle}>
												<span className={styles.subtitleLabel}>
													На ваш аккаунт telegram или номер телефона поступит сообщение с кодом
												</span>
										</div>
									</div>
								</Form>
							)}


						</Formik>
					</div>
			</div>
		</main>
	)
}

export default Confirm