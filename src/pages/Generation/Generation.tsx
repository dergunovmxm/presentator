import { FC } from "react";
import styles from "./Generation.module.scss";
import Header from "../../components/Header";
import { Field, Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const Generation: FC = () => {
	let role = window.localStorage.getItem('role')
	const navigate = useNavigate()
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
							initialValues={{
								theme: "",
								slides: "",
							}}
							onSubmit={(values) => {
								console.log("values", values);
							}}
						>
							{({ errors, touched }) => (
								<Form className={styles.form}>
									<div className={styles.title}>
										Генератор презентаций
									</div>
									<div className={styles.subtitle}>
										Заполните все пункты
									</div>

									<label className={styles.label}>Тема презентации (до 200 символов)</label>
									<Field
										name="theme"
										placeholder="Киберспорт"
										className={styles.input}
									/>

									<label className={styles.label}>Количество слайдов (до 20)</label>
									<Field
										name="slides"
										placeholder="6"
										className={styles.input}
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
											<label className={styles.radioLabel}>
												<Field type="radio" name="One" value="One" className={styles.radio}/>
												Сделать автоматически
											</label>
											<label className={styles.radioLabel}>
												<input type="radio" name="Two" value="Two" className={styles.radio}/>
												Указать вручную
											</label>
						
										</div>
									</div>
									

									<div className={styles.buttonContainer}>
											<button type="button"
												onClick={() => navigate(checkRole())}
											>Начать магию</button>
									</div>						
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
