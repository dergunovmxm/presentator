import { FC } from "react";
import './Info.scss'
import cn from 'classnames'
import {infoContent} from "./utils";

const Info: FC = () => {
	return (
		<section className= 'infoContainer'>
			<a id='more' />
			{
				infoContent.map((item) => {
					return (
						<div className={item.className}>
						<img src={item.image} />
						<div className='descriptionContainer'>
							<div className='description'>
								{item.description}
							</div>
						</div>
					</div>
					)
				})
			}
			
		</section>
	)
}

export default Info

