import React, {FC} from "react";
import style from './Logo.module.scss'
import { useNavigate } from "react-router-dom";

const Logo : FC = () => {
	let role = localStorage.getItem('role')
	const navigate = useNavigate();
	const checkRole = () => {
		if (role) {
			return `/${role}/homepage`
		} else {
			return '/viewer/homepage'
		}
	}

	return (
		<div className={style.logo}
			onClick={() => navigate(checkRole())}
		>
				<span>Презентатор</span>
				<span className={style.color}>AI</span>
			</div>
	)
}

export default Logo;