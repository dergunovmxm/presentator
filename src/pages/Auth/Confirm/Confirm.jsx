import {FC, useState} from 'react'
import styles from './Confirm.module.scss'
import { useNavigate } from 'react-router'
import { Field, Formik } from 'formik'
import { Form, Link } from 'react-router-dom'
import cn from "classnames"
import { validationSchema } from './utils';
const Confirm = () => {
	const navigate = useNavigate()
	const [checked, setChekecd] = useState(false)
	function focusChange(e) {
    if (e.target.value.length >= e.target.getAttribute("maxlength")) {
      e.target.nextElementSibling.focus();
    }
  }

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
								first:"",
								second: "",
								third: "",
								fourth: "",
								
							}}

							onSubmit={ ( values) => {
								const code = values.first + values.second + values.third + values.fourth
								const data = {
									code: code,
									checked: checked
								}
								console.log("data", data)
								navigate('/login')			
							}}
						
						>
							{({errors, touched, handleSubmit}) => (
								<Form className={styles.form}>
									<div className={styles.formContainer}>
										<div className={styles.title}>Подтверждение регистрации</div>
										<div className={styles.subtitle}>
												На ваш аккаунт telegram или номер телефона поступит сообщение с кодом	
										</div>

										<label className={cn(styles.label, {})}>Введите 4-х значный код подтверждения</label>

										<div className={styles.inputContainer}>
											<Field
											key='first'
											name='first'
											type='text'
											maxLength={1}
											onInput={(e) => focusChange(e)}
											autoFocus
											className={cn(styles.confirmInput, {[styles.inputError]: errors.first && touched.first})} 
											/>
											<Field
											key='second'
											name='second'
											type='text'
											maxLength={1}
											onInput={(e) => focusChange(e)}
											className={cn(styles.confirmInput, {[styles.inputError]: errors.second && touched.second})} 
											/>
											<Field
											key='third'
											name='third'
											type='text'
											maxLength={1}
											onInput={(e) => focusChange(e)}
											className={cn(styles.confirmInput, {[styles.inputError]: errors.third && touched.third, })} 
											/>
											<Field
											key='fourth'
											name='fourth'
											type='text'
											maxLength={1}
											className={cn(styles.confirmInput, {[styles.inputError]: errors.fourth && touched.fourth, })} 
											/>
	
										</div>

										<div className={styles.buttonContainer}>
                   	 <button type="submit" onClick={handleSubmit} className={styles.button} disabled={!checked}>
											Подтвердить
										</button>
                  	</div>
										
										<div className={styles.confirmCheckboxContainer}>
												<Field type='checkbox' checked={checked} onChange={() => setChekecd(!checked)} className={styles.confirmCheckbox}/>
												<div className={styles.confirmCheckboxLabel}>
													<span>Я прочитал(а) <Link to='/' className={styles.link}>пользовательское соглаение</Link></span>
													<span> и принимаю его условия </span>
												</div>
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