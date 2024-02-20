import {FC} from "react";
import styles from './Examples.module.scss'
import { exampleImages } from "./utils";
const Examples: FC = () => {
	return (
		<section className={styles.container}>
			<span className={styles.title}>Примеры работ</span>
			<div className={styles.images}>
				{
					exampleImages.map((image) => {
						return (
							<img className={styles.image} src={image.url} alt='example' />
						)
					})
				}
			</div>
		</section>
	)
}

export default Examples