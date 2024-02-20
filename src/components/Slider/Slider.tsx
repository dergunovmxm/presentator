import {FC} from 'react'
import styles from './Slider.module.scss'
import { sliderContent } from './utils'

const Slider : FC = () => {
	return (
		<section  className={styles.container}>
		
			<div className={styles.scroll}>
			
				<div>
						{sliderContent.map((item) => {
							return(
								<img className={styles.sliderImage} src={item.url} alt='sliderImage' />
							)
						})}
					</div>
					<div>
						{sliderContent.map((item) => {
							return(
								<img className={styles.sliderImage} src={item.url} alt='sliderImage' />
							)
						})}
					</div>
			</div>

		</section>
	)
}

export default Slider