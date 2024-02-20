import React, {FC} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss"
import Logo from "../Logo";
import content from "./Header.content.json";
interface HeaderProps {
	role?: string | null;
	isAuth?: boolean;
	generation?: boolean;
}
const Header: FC<HeaderProps> = ({generation, role}: HeaderProps) => {
	const isAuth = false
	const navigate = useNavigate();
	
	return (
		<header className={styles.root}>
			<Logo/>
			<div className={styles.menu}>
				<div className={styles.menuGroup}>
					{
						!generation && (
							<>
								<div className={styles.menuItem}>{content.faq}</div>
								<div className={styles.menuItem}>{content.support}</div>
							</>
						)
					}
				
				</div>
				{
					role === 'user'
					? (
			
							<div className={styles.buttonGroup}>
								<div className={styles.buttonAccountContainer}>
									<div className={styles.buttonAccount} onClick={() => navigate("/user/account")}>

										<div className={styles.iconContainer}>

											<div className={styles.icon}>
												<img src="../images/user.svg" alt="user" />
											</div>

										</div>

										<div className={styles.buttonAccountText}>
											<span>{content.account}</span>
										</div>

									</div>
								</div>
						
							</div>
					)		
					:
					( 
						
						<div className={styles.buttonGroup}>
							<div className={styles.buttonPrimary} onClick={() => navigate("/login")}>{content.login}</div>
							<div className={styles.buttonDefaultBorder}>
								<div className={styles.buttonDefault} onClick={() => navigate("/registration")}>
									{content.register}
								</div>
							</div>
						</div>
					)
				}
		
			</div>
		</header>
	)
}

export default Header