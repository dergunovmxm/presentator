import { FC, useRef } from "react";
import './Info.scss'
import cn from 'classnames'
import {infoContent, mobileImages} from "./utils";

interface InfoProps {}
const Info: FC<InfoProps> = () => {
	return (
		<>
			<section id='info' className= 'infoContainer'>
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
		{/* Разметка для мобильной версии */}
		<section className= 'infoContainerMobile'>
			{infoContent.map((item) => {
				return (
					<div className="descriptionBlock">
						<div className='descriptionContainer'>
							<div className='description'>
								{item.description}
							</div>
						</div>
						<img className={item.divider} src='../images/divider.svg'/>
					</div>						
				
				)
			})}
			<div className="imagesBlock">
				{
					mobileImages.map((item) => {
						return (
							
							<img className='image' src={item.image} />
						)
					})
				}
			</div>

		</section>
		</>

	)
}

export default Info

