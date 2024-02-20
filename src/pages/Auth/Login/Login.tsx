import {FC} from 'react'
import styles from './Login.module.scss'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from "react-router-dom";
import cn from "classnames"
import { validationSchema } from './utils';

const Login: FC = () => {
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
							validationSchema={validationSchema}
							initialValues={{
								login:'',
								password: ''
							}}
							onSubmit={(values, {resetForm}) => {
								window.localStorage.setItem("role", "user")
								window.localStorage.setItem("isAuth", "true")
								navigate('/user/homepage')
								console.log('values', values)
								resetForm()
							}}
						>
							{({errors, touched}) => (
								<Form className={styles.form}>
									<div className={styles.formContainer}>
										<div className={styles.title}>Вход</div>
										<div className={styles.subtitle}>
											<span className={styles.subtitleLabel}>Нет аккаунта?</span>
											<span 
												className={styles.subtitleLink} 
												onClick={() => navigate('/registration')}
											>Создать учетную запись
											</span>
										</div>
										<label className={cn(styles.label, {[styles.labelError]: errors.login && touched.login})}>Логин или номер телефона Telegram</label>
										<Field 
											name='login' 
											placeholder='Логин' 
											className={cn(styles.input, {[styles.inputError]: errors.login && touched.login})} 
										/>
										<label className={cn(styles.label, {[styles.labelError]: errors.password && touched.password})}>Пароль</label>
										<Field 
											name='password' 
											type='password' 
											placeholder='Пароль' 
											className={cn(styles.input, {[styles.inputError]: errors.password && touched.password})}
										/>
										<div className={styles.buttonContainer}>
											<button type='submit'>Войти</button>
										</div>
										<div className={styles.formFooter}>
											<span className={styles.forgot}>Забыли пароль?</span>
											<span className={styles.restore}>Восстановить</span>
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

export default Login