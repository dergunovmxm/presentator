import {FC} from "react";
import styles from "./Presentation.module.scss";
import Header from "../../components/Header";
import classNames from "classnames";

const Presentation = () => {
	let role = window.localStorage.getItem('role')
	return (
		<main className={styles.container}>
			<div className={styles.opacityBox}>
				<div className={styles.contentBox}>
					<Header generation role={role}/>
					<div className={styles.content}>

						<div className={styles.presentation}>

							<span className={styles.title}>Презентация готова!</span>
							<span className={styles.subtitle}>Вы можете её скачать</span>

							<div className={styles.preview}>
								<img src='../images/slider1.png' alt='paint' />
							</div>

							<div className={styles.toggle}>
								<span className={styles.toggleLabel}>.ppt</span>
								<label className={styles.switch}>
									<input className={styles.inputToggle} type="checkbox"/>
									<span className={classNames(styles.slider, styles.round)}></span>
								</label>	
								<span className={styles.toggleLabel}>.pdf</span>
							</div>
							
							<div className={styles.buttonContainer}>
								<div className={styles.sizeBlock}></div>

								<div className={styles.buttonGroup}> 
									<button type='button' className={styles.presentationButton}>Скачать</button>		
									<span className={styles.footerLabel}>Осталось 4 скачивания</span>
								</div>
					
								<div className={styles.radioGroup}>
									<div>
										<input type="radio" id="ppx" name="format" value="ppx" checked  className={styles.radio}/>
										<label className={styles.radioLabel} htmlFor="ppx">.ppx</label>
									</div>

									<div>
										<input 
										type="radio" 
										id="pdf" 
										name="format" 
										value="pdf" 
										className={styles.radio}
										 />
										<label className={styles.radioLabel} htmlFor="pdf">.pdf</label>
									</div>
								</div>

								
							</div>

					
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Presentation