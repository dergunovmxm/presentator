import { FC, useState } from "react";
import styles from "./Generation.module.scss";
import Header from "../../components/Header";
import { Field, Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { validationSchema } from "./utils";
import cn from "classnames"
const Generation = () => {
	let role = window.localStorage.getItem('role')
	const navigate = useNavigate()
	const [typeGeneration, setTypeGeneration] = useState('automatic')

	const handleRadioChange = (value) => {
		setTypeGeneration(value)
	}
	const checkRole = () => {
		if (role) {
			return `/${role}/presentation`
		} else {
			return '/viewer/presentation'
		}
	}
  return (
    <main className={styles.container}>
      <div className={styles.opacityBox}>
        <div className={styles.contentBox}>

				<Header generation role={role}/>
				<div className={styles.content}>
					<div className={styles.generation}>
						<Formik
							validationSchema={validationSchema}
							initialValues={{
								theme: "",
								slides: "",
								locale: false,

							}}
							onSubmit={(values, {resetForm}) => {
								const data = {
									...values,
									type: typeGeneration,
								}
								console.log('data', data)
								navigate(`${checkRole()}`)
								resetForm()
							}}
						>
							{({ errors, touched, handleSubmit }) => (
								<Form className={styles.form}>
									<div className={styles.title}>
										Генератор презентаций
									</div>
									<div className={styles.subtitle}>
										Заполните все пункты
									</div>

									<label className={cn(styles.label, {[styles.labelError]: errors.theme && touched.theme})}>Тема презентации (до 200 символов)</label>
									<Field
										name="theme"
										placeholder="Киберспорт"
										className={cn(styles.generationInput, {[styles.inputError]: errors.theme && touched.theme})} 
									/>

									<label className={cn(styles.label, {[styles.labelError]: errors.slides && touched.slides})}>Количество слайдов (до 20)</label>
									<Field
										name="slides"
										placeholder="6"
										className={cn(styles.generationInput, {[styles.inputError]: errors.slides && touched.slides})} 
									/>
									<div className={styles.checkboxContainer}>
										<Field
											name="locale"
											type='checkbox'
											className={styles.checkbox}
										/>
										<span className={styles.checkboxLabel}>
											Формировать презентацию на английском языке 
										</span>
									</div>

									<div className={styles.radioContainer}>
										<span className={styles.radioTitle}>План презентации</span>
										
										<div className={styles.radioBox}>

											<div className={styles.radioGroup}>
												<input 
													type="radio" 
													id="automatic" 
													name="type" 
													className={styles.radio}
													checked={typeGeneration==="automatic"}
													onChange={() => handleRadioChange('automatic')}
													
												/>
												<label className={styles.radioLabel} htmlFor="automatic">Сделать автоматически</label>
											</div>

											<div className={styles.radioGroup}>
												<input 

													type="radio" 
													id="manually" 
													name="type" 
													className={styles.radio} 
													checked={typeGeneration==="manually"}
													onChange={() => handleRadioChange('manually')}
												/>
												<label  className={styles.radioLabel} htmlFor="manually">Указать вручную</label>
											</div>
											
										</div>
									</div>

									<div className={styles.buttonContainer}>
											<button type="submit" onClick={handleSubmit}
											>Начать магию</button>
										
									</div>		
									<span className={styles.footerLabel}>Осталось скачиваний 5</span>				
								</Form>
							)}
						</Formik>
					</div>
				</div>

				</div>
      </div>
    </main>
  );
};

export default Generation;
