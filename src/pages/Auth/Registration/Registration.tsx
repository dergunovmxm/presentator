import { FC } from "react";
import styles from "./Registration.module.scss";
import { Field, Form, Formik } from 'formik'
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./utils";
import cn from "classnames"
import Header from "../../../components/Header";
import Logo from "../../../components/Logo";
const Registration: FC = () => {
  const navigate = useNavigate()
  const role = window.localStorage.getItem('role')
  return (
    <main className={styles.container}>
      <div className={styles.opacityBox}>
        <div className={styles.headerContainer}>
          <Header role={role}/>
        </div>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Logo/>
          </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              login: "",
              password: "",
            }}
            onSubmit={(values, {resetForm}) => {
              navigate('/confirmation')
              console.log("values", values);
              resetForm()
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <div className={styles.formContainer}>
                  <div className={styles.title}>Регистрация</div>
                  <div className={styles.subtitle}>
                    <span className={styles.subtitleLabel}>Уже есть аккаунт?</span>
                    <span 
                      className={styles.subtitleLink}
                      onClick={() => navigate('/login')}
                    >
                      Войти
                    </span>
                  </div>
                  <label className={cn(styles.label, {[styles.labelError]: errors.login && touched.login})}>Логин или номер телефона Telegram</label>
                  <Field
                    name="login"
                    placeholder="Логин"
                    className={cn(styles.registerInput, {[styles.inputError]: errors.login && touched.login})}
                  />
                  <label className={cn(styles.label, {[styles.labelError]: errors.password && touched.password})}>Пароль</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    className={cn(styles.registerInput, {[styles.inputError]: errors.password && touched.password})}
                  />
                  <div className={styles.buttonContainer}>
                    <button type="submit">Войти</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default Registration;
