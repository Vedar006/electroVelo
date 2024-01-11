import React from 'react'

import { Link } from 'react-router-dom'

import Button from '@components/Button/Button'

import styles from './Card.module.scss'
export interface ICard {
	id: number
	type: 'primary' | 'secondary'
	title: string
	price: string
	available: boolean
	previewImage: string
	otherClass?: string
	countrySrc: string
}
const Card: React.FC<ICard> = props => {
	const { id, type, title, price, available, previewImage, otherClass, countrySrc } =
		props
	// console.log('iii',images)

	return (
		<li className={`${styles.Card} Card--${type} ${otherClass}`}>
			<div className={styles.Card__header}>
				<div className={styles.Card__country}>
					<img src={`/images/Card/${countrySrc}`} alt="" />
				</div>
				<div className={styles.Card__status}>
					<span>{available ? 'В наличии' : 'Нет в наличии'} </span>
				</div>
			</div>
			<div className={styles.Card__body}>
				<img src={`/images/Product/${previewImage}`} alt="" />
			</div>
			<div className={styles.Card__footer}>
				<h4 className={styles.Card__title}>{title || 'Title'}</h4>
				<span className={styles.Card__price}>{price || '100'} ₽</span>

				<Button otherClass={styles.Card__btn}>
					<Link to={`/product/${id}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="25"
							viewBox="0 0 26 25"
							fill="none">
							<path
								d="M9.875 2.5C10.0408 2.5 10.1997 2.56585 10.3169 2.68306C10.4342 2.80027 10.5 2.95924 10.5 3.125V5.625C10.5 5.79076 
 											10.4342 5.94973 10.3169 6.06694C10.1997 6.18415 10.0408 6.25 9.875 6.25C9.70924 6.25 9.55027 6.18415 9.43306 6.06694C9.31585
 											5.94973 9.25 5.79076 9.25 5.625V3.125C9.25 2.95924 9.31585 2.80027 9.43306 2.68306C9.55027 2.56585 9.70924 2.5 9.875 2.5ZM5.0125 
 											4.5125C5.07056 4.4543 5.13953 4.40812 5.21546 4.37661C5.29139 4.3451 5.37279 4.32888 5.455 4.32888C5.53721 4.32888 5.61861 4.3451 
 											5.69454 4.37661C5.77047 4.40812 5.83944 4.4543 5.8975 4.5125L7.665 6.28125C7.72469 6.3389 7.77231 6.40787 7.80506 6.48412C7.83782 
 											6.56037 7.85506 6.64239 7.85578 6.72537C7.8565 6.80836 7.84069 6.89066 7.80926 6.96747C7.77784 7.04428 7.73143 7.11406 7.67275 
 											7.17275C7.61406 7.23143 7.54428 7.27784 7.46747 7.30926C7.39066 7.34069 7.30836 7.3565 7.22537 7.35578C7.14239 7.35506 7.06037 
 											7.33782 6.98412 7.30506C6.90787 7.27231 6.8389 7.22469 6.78125 7.165L5.01375 5.3975C4.89658 5.28029 4.83076 5.12135 4.83076 
											4.95563C4.83076 
 											4.7899 4.89658 4.63095 5.01375 4.51375L5.0125 4.5125ZM14.7375 4.5125C14.7957 4.57056 14.8419 4.63953 14.8734 4.71546C14.9049 
											4.79139 14.9211 
 											4.87279 14.9211 4.955C14.9211 5.03721 14.9049 5.11861 14.8734 5.19454C14.8419 5.27047 14.7957 5.33944 14.7375 5.3975L12.9675 
											7.165C12.9098 
 											7.22469 12.8409 7.27231 12.7646 7.30506C12.6884 7.33782 12.6064 7.35506 12.5234 7.35578C12.4404 7.3565 12.3581 7.34069 12.2813 
											7.30926C12.2045 
 											7.27784 12.1347 7.23143 12.076 7.17275C12.0173 7.11406 11.9709 7.04428 11.9395 6.96747C11.9081 6.89066 11.8922 6.80836 11.893
											 6.72537C11.8937 
 											6.64239 11.9109 6.56037 11.9437 6.48412C11.9764 6.40787 12.0241 6.3389 12.0837 6.28125L13.8512 4.51375C13.9685 4.39658 14.1274 
											4.33076 14.2931 
 											4.33076C14.4589 4.33076 14.6178 4.39658 14.735 4.51375L14.7375 4.5125ZM3 9.375C3 9.20924 3.06585 9.05027 3.18306 8.93306C3.30027 
											8.81585 3.45924 
 											8.75 3.625 8.75H6.125C6.29076 8.75 6.44973 8.81585 6.56694 8.93306C6.68415 9.05027 6.75 9.20924 6.75 9.375C6.75 9.54076 6.68415 
											9.69973 6.56694 
 											9.81694C6.44973 9.93415 6.29076 10 6.125 10H3.625C3.45924 10 3.30027 9.93415 3.18306 9.81694C3.06585 9.69973 3 9.54076 
											3 9.375ZM11.3 9.125C11.1176 
 											8.97306 10.8957 8.8762 10.6602 8.84578C10.4248 8.81535 10.1855 8.8526 9.97045 8.95318C9.75539 9.05376 9.57343 9.2135 9.44584
											 9.41371C9.31826 9.61393 
 											9.25033 9.84634 9.25 10.0838V21.46C9.25 22.615 10.6813 23.1525 11.4412 22.2837L13.9738 19.3888C14.1499 19.1879 14.3669 19.027 
											14.6103 18.9168C14.8537 
 											18.8067 15.1178 18.7498 15.385 18.75H19.3988C20.5675 18.75 21.0975 17.2875 20.1987 16.54L11.3 9.12375V9.125ZM10.5 
											21.4625V10.0838L19.3988 
 											17.5H15.385C14.9394 17.4999 14.499 17.5952 14.0933 17.7793C13.6875 17.9634 13.3259 18.2321 13.0325 18.5675L10.5 
											21.4625Z"
								fill="white"
							/>
						</svg>
						Перейти
					</Link>
				</Button>
			</div>
		</li>
	)
}

export default Card
