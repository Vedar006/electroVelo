import React,{useEffect} from 'react'

import { useAppDispatch,useAppSelector } from '@redux/store'

import { changeSize,changeColor } from '@redux/slices/productSlice'

import Button from '@components/Button/Button'

import { ICard } from 'Card'

import styles from './ProductInfo.module.scss'


interface ProductInfoProps {
	loading: any
	success: any
	product: ICard
}

const ProductInfo: React.FC<ProductInfoProps> = props => {
	const [counter, setCounter] = React.useState(1)
	const { loading, success, product } = props
	console.log('Info...........', product)
	const dispatch = useAppDispatch();
	const productSize = useAppSelector((state)=> state.product.size);
	const productColor= useAppSelector((state)=> state.product.color);
	console.log(productSize);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	//  dispatch(changeSize(success&&product&&product.sizes&&product.sizes[0].size))
	useEffect(()=> {
			 dispatch(changeSize(success&&product&&product.sizes&&product.sizes[0].size))
			 dispatch(changeColor(success&&product&&product.colors&&product.colors[0].color))
	},[])
	
	 const handleClickSize = (size:string)=> {
		dispatch(changeSize(size));
	 }
	 const handleClickColor = (color:string) =>{
		dispatch(changeColor(color))
	 }
	return (
		<div className={styles.ProductInfo}>
			<div className={styles.ProductInfo__top}>
				<h1 className={styles.ProductInfo__title}>{product.title}</h1>
				<div className={styles.ProductInfo__social}>
					<div>
						<span>
							{loading
								? 'loading...'
								: success
									? product.brand
									: 'Error'}
						</span>
						<span>
							Артикул :{' '}
							{loading
								? 'loading...'
								: success
									? product.articul
									: 'Error'}
						</span>
						<span className={styles.ProductInfo__available}>
							В наличии
						</span>
					</div>
					<ul className={`list-reset ${styles.ProductSocial}`}>
						<li>
							<a href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="21"
									viewBox="0 0 22 21"
									fill="none">
									<rect
										width="22"
										height="21"
										rx="10.5"
										fill="#E5E5E5"
									/>
									<path
										d="M14.4311 11.9662C14.7197 11.6907 14.7609 11.2972 14.5136 10.9036C14.3074 10.5888 
										13.9364 10.4314 13.5241 10.5101C13.3592 10.5494 13.1942 10.6282 13.0293 10.7462C11.7512 
										11.5727 10.0196 11.5333 8.74155 10.7069C8.6591 10.6675 8.57664 10.6282 8.49418 10.5888C8.04067 
										10.392 7.58716 10.4707 7.33979 10.8643C7.05119 11.2578 7.09241 11.6907 7.46347 12.0449C7.54592 
										12.1236 7.62838 12.163 7.66961 12.2417L7.71084 12.281C8.28804 12.7139 8.98893 12.9894 9.89596 
										13.1075L9.35998 13.6191C8.90647 14.052 8.41173 14.5243 7.95821 14.9572C7.83453 15.0752 7.66961 
										15.272 7.66961 15.5475C7.66961 15.9017 7.87576 16.2559 8.24681 16.4133C8.3705 16.492 8.49418 
										16.492 8.61787 16.492C8.82401 16.492 9.07138 16.4133 9.2363 16.2165C9.85472 15.6262 10.3495 
										15.1539 10.8442 14.6817C10.8854 14.6423 10.8854 14.6423 10.8854 14.6423C10.8854 14.6423 
										10.9267 14.6423 10.9267 14.6817C11.2565 15.0359 11.6276 15.3507 11.9574 15.7049C12.1223 
										15.8623 12.2872 16.0197 12.4521 16.1771C12.6583 16.3739 12.8232 16.4526 13.0706 16.4526C13.4416 
										16.492 13.8539 16.2559 14.0188 15.9017C14.1837 15.5868 14.1013 15.1933 13.8127 14.9572C13.4004 
										14.5636 12.9881 14.1307 12.5346 13.7372L11.8337 13.0681C12.2048 13.0288 12.617 12.9501 12.9881 
										12.7927C13.6065 12.5959 14.06 12.3204 14.4311 11.9662Z"
										fill="white"
									/>
									<path
										d="M10.8854 10.8643C12.6583 10.8643 14.1013 9.52623 14.1013 7.83398C14.1013 7.00754 
										13.7714 6.22045 13.153 5.63013C12.5346 5.03981 11.7512 4.72498 10.9267 4.72498C9.15384 
										4.72498 7.75207 6.10238 7.71084 7.75527C7.71084 8.58172 8.04067 9.32945 8.6591 
										9.91977C9.2363 10.5494 10.0196 10.8643 10.8854 10.8643ZM9.97841 6.92883C10.2258 
										6.6927 10.5556 6.57464 10.8854 6.57464C11.6276 6.57464 12.1635 7.1256 12.1635 
										7.79463C12.1635 8.50301 11.5863 9.01462 10.8854 9.01462C10.1433 9.01462 9.60736 
										8.46366 9.60736 7.79463C9.60736 7.47979 9.73104 7.16496 9.97841 6.92883Z"
										fill="white"
									/>
									<path
										d="M14.4311 11.9662C14.7197 11.6907 14.7609 11.2972 14.5136 10.9036C14.3074 10.5888 
										13.9364 10.4314 13.5241 10.5101C13.3592 10.5494 13.1942 10.6282 13.0293 10.7462C11.7512 
										11.5727 10.0196 11.5333 8.74155 10.7069C8.6591 10.6675 8.57664 10.6282 8.49418 
										10.5888C8.04067 10.392 7.58716 10.4707 7.33979 10.8643C7.05119 11.2578 7.09241 
										11.6907 7.46347 12.0449C7.54592 12.1236 7.62838 12.163 7.66961 12.2417L7.71084 
										12.281C8.28804 12.7139 8.98893 12.9894 9.89596 13.1075L9.35998 13.6191C8.90647 
										14.052 8.41173 14.5243 7.95821 14.9572C7.83453 15.0752 7.66961 15.272 7.66961 
										15.5475C7.66961 15.9017 7.87576 16.2559 8.24681 16.4133C8.3705 16.492 8.49418 
										16.492 8.61787 16.492C8.82401 16.492 9.07138 16.4133 9.2363 16.2165C9.85472 15.6262 
										10.3495 15.1539 10.8442 14.6817C10.8854 14.6423 10.8854 14.6423 10.8854 
										14.6423C10.8854 14.6423 10.9267 14.6423 10.9267 14.6817C11.2565 15.0359 11.6276 15.3507 
										11.9574 15.7049C12.1223 15.8623 12.2872 16.0197 12.4521 16.1771C12.6583 16.3739 12.8232 
										16.4526 13.0706 16.4526C13.4416 16.492 13.8539 16.2559 14.0188 15.9017C14.1837 15.5868 
										14.1013 15.1933 13.8127 14.9572C13.4004 14.5636 12.9881 14.1307 12.5346 13.7372L11.8337 
										13.0681C12.2048 13.0288 12.617 12.9501 12.9881 12.7927C13.6065 12.5959 14.06 12.3204 
										14.4311 11.9662Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none">
									<rect
										width="21"
										height="21"
										rx="10.5"
										fill="#E5E5E5"
									/>
									<path
										d="M11.0154 14.175C7.06924 14.175 4.81839 11.4159 4.72461 6.82495H6.70131C6.76624 
										10.1946 8.22352 11.6219 9.3778 11.9162V6.82495H11.2391V9.73111C12.3789 9.60603 
										13.5765 8.28171 13.9805 6.82495H15.8418C15.6895 7.58047 15.3861 8.29582 14.9504 
										8.92626C14.5146 9.55671 13.9561 10.0887 13.3096 10.4889C14.0312 10.8546 14.6686 
										11.3722 15.1797 12.0076C15.6908 12.643 16.064 13.3817 16.2746 14.175H14.2258C14.0367 
										13.4859 13.6524 12.8692 13.1211 12.4019C12.5898 11.9347 11.9351 11.6378 11.2391 
										11.5484V14.175H11.0154Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none">
									<rect
										width="21"
										height="21"
										rx="10.5"
										fill="#E5E5E5"
									/>
									<path
										d="M14.6996 6.61622L13.1218 14.8535C13.1218 14.8535 12.901 15.4246 12.2945 15.1507L8.65401 
										12.2602L8.63713 12.2516C9.12888 11.7944 12.9421 8.24395 13.1088 8.08301C13.3668 7.83376 
										13.2066 7.68538 12.9071 7.87366L7.27443 11.5779L5.10137 10.8207C5.10137 10.8207 4.75939 
										10.6947 4.7265 10.4208C4.69316 10.1465 5.11262 9.99809 5.11262 9.99809L13.9715 
										6.39925C13.9715 6.39925 14.6996 6.06796 14.6996 6.61622Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="21"
									viewBox="0 0 22 21"
									fill="none">
									<rect
										width="22"
										height="21"
										rx="10.5"
										fill="#E5E5E5"
									/>
									<path
										d="M15.3598 6.33279C14.2732 5.29919 12.8244 4.72498 11.2951 4.72498C8.11585 
										4.72498 5.54024 7.17498 5.54024 10.1992C5.54024 11.1562 5.82195 12.1133 6.30488 
										12.9172L5.5 15.75L8.55854 14.9844C9.40366 15.4054 10.3293 15.6351 11.2951 15.6351C14.4744 
										15.6351 17.05 13.1851 17.05 10.1609C17.0098 8.74451 16.4463 7.36638 15.3598 6.33279ZM14.072
										 12.1515C13.9512 12.4578 13.3878 12.764 13.1061 12.8023C12.8646 12.8406 12.5427 
										 12.8406 12.2207 12.764C12.0195 12.6875 11.7378 12.6109 11.4159 12.4578C9.96707 
										 11.8836 9.04146 10.5054 8.96098 10.3906C8.88049 10.314 8.35732 9.66326 8.35732 
										 8.97419C8.35732 8.28513 8.71951 7.97888 8.84024 7.82576C8.96098 7.67263 9.12195 
										 7.67263 9.24268 7.67263C9.32317 7.67263 9.4439 7.67263 9.52439 7.67263C9.60488 
										 7.67263 9.72561 7.63435 9.84634 7.90232C9.96707 8.17029 10.2488 8.85935 10.289 
										 8.89763C10.3293 8.97419 10.3293 9.05076 10.289 9.12732C10.2488 9.20388 10.2085 
										 9.28044 10.128 9.35701C10.0476 9.43357 9.96707 9.54841 9.92683 9.58669C9.84634 
										 9.66326 9.76585 9.73982 9.84634 9.85466C9.92683 10.0078 10.2085 10.4289 10.6512 
										 10.8117C11.2146 11.2711 11.6573 11.4242 11.8183 11.5008C11.9793 11.5773 12.0598 
										 11.539 12.1402 11.4625C12.2207 11.3859 12.5024 11.0797 12.5829 10.9265C12.6634 
										 10.7734 12.7841 10.8117 12.9049 10.85C13.0256 10.8883 13.75 11.2328 13.8707 
										 11.3094C14.0317 11.3859 14.1122 11.4242 14.1524 11.4625C14.1927 11.5773 
										 14.1927 11.8453 14.072 12.1515Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href="/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									viewBox="0 0 21 21"
									fill="none">
									<rect
										width="21"
										height="21"
										rx="10.5"
										fill="#E5E5E5"
									/>
									<path
										d="M13.7833 5.01158C11.7823 4.62944 9.70425 4.62944 7.70321 5.01158C6.81813 5.20265
										 5.70216 6.27264 5.50975 7.11335C5.16342 8.75655 5.16342 10.438 5.50975 12.0812C5.74064 
										 12.9219 6.85661 13.9919 7.70321 14.1829C7.74169 14.1829 7.78017 14.2211 7.78017 
										 14.2594V16.6668C7.78017 16.7815 7.9341 16.8579 8.01106 16.7433L9.16551 15.5586C9.16551 
										 15.5586 10.0891 14.6033 10.243 14.4504C10.243 14.4504 10.2815 14.4122 10.32 
										 14.4122C11.4744 14.4504 12.6673 14.3358 13.8218 14.1447C14.7069 13.9536 15.8228 12.8837 
										 16.0152 12.0429C16.3616 10.3997 16.3616 8.71833 16.0152 7.07513C15.7844 6.27264 14.6684 
										 5.20265 13.7833 5.01158ZM13.8218 12.1958C13.6294 12.5779 13.3985 12.8837 13.0137 
										 13.0747C12.8982 13.1129 12.7828 13.1512 12.6673 13.1894C12.5134 13.1512 12.398 13.1129 
										 12.2825 13.0747C11.0511 12.5779 9.89666 11.8901 8.9731 10.8965C8.47284 10.3233 8.04954 
										 9.67368 7.70321 8.98583C7.54928 8.64191 7.39535 8.33619 7.27991 7.99227C7.16446 7.68656 
										 7.35687 7.38085 7.54928 7.15156C7.74169 6.92228 7.97258 6.76942 8.24195 6.65478C8.43436 
										 6.54014 8.62677 6.61657 8.78069 6.76942C9.08855 7.15156 9.3964 7.5337 9.62729 
										 7.95405C9.78122 8.22155 9.74273 8.52726 9.47336 8.71833C9.3964 8.75655 9.35792 8.79476 
										 9.28095 8.87119C9.24247 8.9094 9.16551 8.94762 9.12703 9.02404C9.05006 9.13869 9.05006 
										 9.25333 9.08855 9.36797C9.3964 10.2469 9.97362 10.9347 10.8587 11.3169C11.0126 11.3933 
										 11.1281 11.4315 11.3205 11.4315C11.5899 11.3933 11.7053 11.0876 11.8977 10.9347C12.0901 
										 10.7819 12.321 10.7819 12.5519 10.8965C12.7443 11.0112 12.9367 11.164 13.1676 
										 11.3169C13.36 11.4697 13.5524 11.5844 13.7448 11.7372C13.8603 11.8137 13.8988 12.0047 
										 13.8218 12.1958ZM12.2056 9.32976C12.1286 9.32976 12.1671 9.32976 12.2056 9.32976C12.0516 
										 9.32976 12.0132 9.25333 11.9747 9.13869C11.9747 9.06226 11.9747 8.94762 11.9362 
										 8.87119C11.8977 8.71833 11.8207 8.56548 11.6668 8.45084C11.5899 8.41262 11.5129 8.37441 
										 11.4359 8.33619C11.3205 8.29798 11.2435 8.29798 11.1281 8.29798C11.0126 8.25977 10.9741 
										 8.18334 10.9741 8.0687C10.9741 7.99227 11.0896 7.91584 11.1666 7.91584C11.7823 7.95406 
										 12.244 8.29798 12.321 9.02404C12.321 9.06226 12.321 9.13869 12.321 9.1769C12.321 9.25333 
										 12.2825 9.32976 12.2056 9.32976ZM11.8207 7.64834C11.6283 7.57192 11.4359 7.49549 11.205 
										 7.45727C11.1281 7.45727 11.0126 7.41906 10.9357 7.41906C10.8202 7.41906 10.7433 7.34263 
										 10.7817 7.22799C10.7817 7.11335 10.8587 7.03692 10.9741 7.07513C11.359 7.11335 11.7053 
										 7.18978 12.0516 7.34263C12.7443 7.68656 13.1291 8.25977 13.2446 9.02404C13.2446 9.06226 
										 13.2446 9.10047 13.2446 9.13869C13.2446 9.21512 13.2446 9.29154 13.2446 9.40618C13.2446 
										 9.4444 13.2446 9.48261 13.2446 9.52083C13.2061 9.67368 12.9367 9.7119 12.8982 
										 9.52083C12.8982 9.48261 12.8598 9.40619 12.8598 9.36797C12.8598 9.02405 12.7828 8.68012 
										 12.6289 8.37441C12.398 8.03048 12.1286 7.8012 11.8207 7.64834ZM13.8988 9.94118C13.7833 
										 9.94118 13.7063 9.82654 13.7063 9.7119C13.7063 9.48261 13.6679 9.25333 13.6294 
										 9.02404C13.4755 7.8012 12.4749 6.80764 11.282 6.61657C11.0896 6.57835 10.8972 
										 6.57835 10.7433 6.54014C10.6278 6.54014 10.4739 6.54014 10.4354 6.38728C10.3969 
										 6.27264 10.5124 6.158 10.6278 6.158C10.6663 6.158 10.7048 6.158 10.7048 6.158C10.7817 
										 6.158 12.2825 6.19621 10.7048 6.158C12.321 6.19621 13.6679 7.2662 13.9372 8.87119C13.9757 
										 9.13869 14.0142 9.40619 14.0142 9.7119C14.0912 9.82654 14.0142 9.94118 13.8988 9.94118Z"
										fill="white"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.ProductInfo__price}>
					<span>
						{loading ? 'loading...' : success ? product.price : 'Error'}
						₽
					</span>
					<span className={styles.ProductInfo__prevPrice}>522 000 ₽</span>
				</div>
				<div className={styles.ProductInfo__descr}>
					<p>
						{loading
							? 'loading...'
							: success
								? product.description
								: 'Error'}
					</p>
				</div>
				<div className={styles.ProductInfo__sizes}>
					<h3>Размер:</h3>
					<ul className={`list-reset ${styles.ProductSizes}`}>
						{loading
							? 'Loading...'
							: success
								? product.sizes?.map(item => (
									<li
										className={`${styles.ProductSizes__item} ${item.size===productSize&&styles.active}`}
										onClick={()=>handleClickSize(item.size)}>
										{item.size}
									</li>
							  ))
								: 'Error'}
					</ul>
				</div>
				<div className={styles.ProductInfo__colors}>
					<h3>Цвет:</h3>
					<ul className={`list-reset ${styles.ProductColors}`}>
						{loading
							? 'Loading...'
							: success
								? product.colors?.map(color => (
									<li
										style={{
											backgroundColor: color.hexColor,
										}}
										className={`${styles.ProductColors__item} ${color.color===productColor&&styles.active}`}
										onClick={()=>handleClickColor(color.color)}></li>
							  ))
								: 'Error'}
					</ul>
				</div>
			</div>
			<div className={styles.ProductInfo__bottom}>
				<div className={styles.ProductCounter}>
					<button
						className={`btn-reset ${styles.ProductCounter__btn}`}
						onClick={() => setCounter(counter - 1)}>
						-
					</button>
					<span>{counter}</span>
					<button
						className={`btn-reset ${styles.ProductCounter__btn}`}
						onClick={() => setCounter(counter + 1)}>
						+
					</button>
				</div>
				<Button otherClass={styles.ProductInfo__addToCart}>В корзину</Button>
				<Button otherClass={`${styles.ProductInfo__addToFavorites}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="29"
						viewBox="0 0 32 29">
						<path
							d="M4.67757 14.34L16.5 26.4464L28.3224 14.34C29.6367 12.9941 30.375 11.1688 30.375 9.26553C30.375 
							5.30217 27.2374 2.08923 23.367 2.08923C21.5084 2.08923 19.7259 2.84531 18.4117 4.19112L16.5 6.14876L14.5883 
							4.19112C13.274 2.84531 11.4916 2.08923 9.63294 2.08923C5.76255 2.08923 2.625 5.30217 2.625 9.26553C2.625 11.1688 
							3.36333 12.9941 4.67757 14.34Z"
							stroke="#F57520"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Button>
			</div>
		</div>
	)
}

export default ProductInfo
