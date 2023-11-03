import React from 'react'

import styles from './Footer.module.scss'

interface FooterProps {}

const Footer: React.FC<FooterProps> = props => {
	const {} = props
	return (
		<footer className={styles.Footer}>
			<div className={`container ${styles.Footer__container}`}>
				<div className={styles.Footer__columns}>
					<div className={styles.Footer__logo}>
						<a href="/">
							<svg
								width="87"
								height="49"
								viewBox="0 0 87 49"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20.8637 22.3305C23.0006 22.3305 24.7328 20.5545 24.7328 18.3638C24.7328 16.1731 23.0006 
							14.3972 20.8637 14.3972C18.7269 14.3972 16.9946 16.1731 16.9946 18.3638C16.9946 20.5545 18.7269 22.3305 20.8637 22.3305Z"
									stroke="white"
									stroke-width="0.731399"
									stroke-miterlimit="10"
								/>
								<path
									d="M23.9585 10.2722C26.0953 10.2722 27.8276 8.49626 27.8276 6.30555C27.8276 4.11485 26.0953 2.33893 
							23.9585 2.33893C21.8216 2.33893 20.0894 4.11485 20.0894 6.30555C20.0894 8.49626 21.8216 10.2722 23.9585 10.2722Z"
									stroke="white"
									stroke-width="0.731399"
									stroke-miterlimit="10"
								/>
								<path
									d="M24.1096 6.74202C24.1406 6.73996 24.1708 6.73128 24.1981 6.71656C24.2254 6.70184 24.2493 6.68142 
							24.2681 6.65669C24.6484 6.13252 24.1657 5.97648 24.1657 5.97648L16.6883 6.57379C16.6526 6.5784 
							16.6163 6.57423 16.5825 6.56164C16.5487 6.54904 16.5185 6.52841 16.4945 6.50152C16.4705 6.47463 
							16.4534 6.44229 16.4447 6.40731C16.436 6.37232 16.4359 6.33574 16.4445 6.30074C16.5765 5.67817 
							16.8052 5.08011 17.1223 4.52831C17.1608 4.45813 17.2174 4.39958 17.2862 4.3588C17.355 4.31801 
							17.4336 4.29649 17.5136 4.29649C17.5936 4.29649 17.6722 4.31801 17.741 4.3588C17.8099 4.39958 
							17.8665 4.45813 17.9049 4.52831L17.9025 5.14269C17.8999 5.18455 17.9101 5.22621 17.9317
							 5.26215C17.9739 5.32651 18.0307 5.37998 18.0975 5.41818C18.1291 5.43464 18.1643 5.44315 18.2
							 5.44295C18.2357 5.44275 18.2707 5.43387 18.3022 5.41706C18.3336 5.40025 18.3605 5.37602 18.3805 
							 5.34648C18.4005 5.31694 18.413 5.28298 18.4169 5.24752C18.4754 4.75992 18.49 3.6677 17.4709 
							 3.62382C16.0959 3.55555 15.7375 6.1569 15.6522 7.11503C15.648 7.1602 15.6535 7.20574 15.6683 
							 7.24862C15.6831 7.2915 15.7068 7.33074 15.738 7.36372C15.7691 7.39671 15.8069 7.42268 15.8489 
							 7.43991C15.8908 7.45715 15.936 7.46524 15.9813 7.46366H17.1028C17.1337 7.46385 17.1642 7.47048 
							 17.1923 7.48313C17.2205 7.49577 17.2457 7.51416 17.2664 7.5371C17.287 7.56005 17.3026 7.58705 
							 17.3123 7.61639C17.3219 7.64572 17.3253 7.67674 17.3222 7.70746L16.7981 13.349C16.7939 13.4019 
							 16.7706 13.4514 16.7324 13.4883C16.6942 13.5251 16.6438 13.5467 16.5908 13.5489L15.0208 
							 13.6416C14.9874 13.6432 14.9542 13.6373 14.9234 13.6242C14.8927 13.6112 14.8653 13.5915 14.8433 
							 13.5664C14.8212 13.5413 14.8052 13.5116 14.7962 13.4794C14.7873 13.4473 14.7857 13.4135 14.7916 
							 13.3807C14.846 13.1099 14.8786 12.8351 14.8891 12.5591C14.8891 12.2811 14.6453 12.1788 14.5185 
							 12.1007C14.5012 12.0891 14.4813 12.0819 14.4605 12.0798C14.4397 12.0777 14.4188 12.0808 14.3995 
							 12.0888C14.3802 12.0967 14.3631 12.1093 14.3499 12.1254C14.3366 12.1416 14.3276 12.1607 14.3235 
							 12.1812L13.7018 15.1531C13.6938 15.1879 13.6945 15.2241 13.7039 15.2586C13.7132 15.293 13.7309 
							 15.3246 13.7554 15.3506C13.8285 15.4257 13.9265 15.4716 14.0309 15.4798C14.0802 15.4841 14.1296 
							 15.4719 14.1711 15.4449C14.2126 15.418 14.244 15.3779 14.2601 15.3311L14.5161 14.5997C14.5294 
							 14.5597 14.554 14.5244 14.5869 14.4981C14.6197 14.4717 14.6595 14.4554 14.7014 14.451L16.5689 
							 14.2657C16.6032 14.2621 16.6378 14.2666 16.67 14.2789C16.7022 14.2912 16.731 14.3109 16.7542 
							 14.3364L20.7525 18.7248C20.7731 18.7476 20.7983 18.766 20.8265 18.7786C20.8546 18.7911 20.885 
							 18.7977 20.9158 18.7979H21.067C21.1134 18.7982 21.1588 18.7837 21.1964 18.7565C21.2341 18.7293 
							 21.2622 18.6909 21.2767 18.6468L23.1734 13.0247C23.1855 12.989 23.1882 12.9507 23.1814 
							 12.9136C23.1746 12.8765 23.1584 12.8418 23.1344 12.8126L18.746 7.54656C18.7259 7.52381 
							 18.711 7.49702 18.7022 7.468C18.6933 7.43898 18.6908 7.4084 18.6948 7.37833V7.32714C18.7009 
							 7.27652 18.7245 7.22962 18.7614 7.19447C18.7983 7.15932 18.8463 7.13813 18.8972 7.13453L24.1096 
							 6.74202ZM22.1373 14.0146L20.9183 17.3571C20.905 17.3925 20.8829 17.424 20.8541 17.4485C20.8252 
							 17.473 20.7905 17.4897 20.7534 17.4971C20.7163 17.5044 20.6779 17.5021 20.6418 17.4904C20.6058 
							 17.4787 20.5734 17.458 20.5477 17.4302L17.8488 14.5046C17.822 14.475 17.8036 14.4387 17.7957 
							 14.3995C17.7878 14.3604 17.7906 14.3198 17.8038 14.2821C17.817 14.2443 17.8402 14.2109 17.8709 
							 14.1853C17.9016 14.1597 17.9386 14.1428 17.978 14.1365L21.8788 13.5075C21.9094 13.5044 21.9402 
							 13.5077 21.9693 13.5172C21.9985 13.5267 22.0254 13.5421 22.0483 13.5625C22.0712 13.5829 22.0897 
							 13.6078 22.1025 13.6357C22.1152 13.6636 22.1221 13.6938 22.1226 13.7244V13.9365C22.1327 13.9613 
							 22.1377 13.9878 22.1373 14.0146ZM21.7569 12.6761L17.7708 13.3051C17.738 13.3086 17.7047 13.3046 
							 17.6736 13.2936C17.6424 13.2826 17.6142 13.2647 17.5908 13.2413C17.5674 13.218 17.5496 13.1897 
							 17.5385 13.1585C17.5275 13.1274 17.5236 13.0942 17.527 13.0613L18.0146 8.42911C18.0224 8.39019 
							 18.0405 8.35408 18.067 8.32453C18.0935 8.29499 18.1275 8.2731 18.1653 8.26115C18.2032 8.24919 
							 18.2436 8.24761 18.2822 8.25657C18.3209 8.26553 18.3565 8.2847 18.3852 8.31209L21.8886 
							 12.3128C21.9142 12.3427 21.9314 12.3788 21.9385 12.4174C21.9455 12.4561 21.9422 12.4959 
							 21.9288 12.5329C21.9154 12.5699 21.8924 12.6026 21.8622 12.6277C21.832 12.6529 21.7957 
							 12.6696 21.7569 12.6761Z"
									fill="white"
									stroke="white"
									stroke-width="0.2438"
									stroke-miterlimit="10"
								/>
								<path
									d="M65.6303 41.2972L67.3101 36.8307L63.4995 34.0465H68.3731L69.9309 29.6216L71.2012 
							34.127H75.8699L71.9374 36.7503L73.1272 41.2972L69.6847 38.7153"
									fill="#F57520"
								/>
								<path
									d="M45.5347 48.7628H50.4261L64.033 1.6275H59.1417L45.5347 48.7628Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M52.7383 48.7628L54.2502 44.0493H71.4145L71.7135 44.0495C72.1615 44.05 72.5882 
							44.0505 72.9986 44.0403C75.29 43.9169 77.3833 42.6646 78.9995 41.0182C80.6744 
							39.3121 81.6131 37.0157 81.6134 34.6235C81.6135 32.2156 80.6631 29.9051 
							78.9693 28.1955C78.1052 27.3232 77.094 26.9124 75.9914 26.7165C75.2809 
							26.6217 74.5645 26.5653 73.8648 26.5419C73.5559 26.5356 73.2432 26.5335 
							72.9276 26.5314C72.8257 26.5307 72.7235 26.53 72.6211 26.5292H58.8748L60.2088 
							22.2603H66.9678C68.1738 22.2603 68.8877 22.2729 69.5087 22.2839C70.5363 22.3021 
							71.3097 22.3158 73.6379 22.2603C74.8619 22.2312 75.6672 22.1925 76.3827 21.9992C77.54 
							21.5659 78.6006 20.8822 79.4828 19.9832C81.0516 18.3844 81.9309 16.2324 81.9312 
							13.9907C81.9313 11.7342 81.0694 9.27717 79.4828 7.67505C77.8965 6.07327 75.7531 
							5.82592 73.5007 5.80743H65.1002L66.0785 1.62751H72.126C72.6095 1.62751 72.9971 
							1.62295 73.3334 1.61899C74.4817 1.60547 75.0309 1.59901 76.7506 1.80538C76.989 
							1.83399 77.2073 1.878 77.4097 1.93574C79.4346 2.29055 81.2992 3.03294 82.8138 
							4.56234C85.2684 7.04111 86.6069 10.4995 86.6228 13.9907C86.6076 17.4597 85.2409 
							20.7856 82.8138 23.2604C82.5035 23.5768 82.1776 23.8528 81.838 24.0938C82.0669 
							24.2688 82.2899 24.4645 82.5066 24.6832C85.1271 27.3283 86.605 30.8981 86.622 
							34.6235C86.6057 38.3253 85.1467 41.8745 82.5556 44.5154C80.8927 46.2102 78.8475 
							47.4084 76.6185 48.0711C75.3662 48.51 73.9359 48.7628 72.3039 48.7628H52.7383Z"
									fill="white"
								/>
								<path
									d="M0.88916 1.62726H5.69163L17.1642 41.381L15.3855 48.7626L0.88916 1.62726Z"
									fill="white"
								/>
								<path
									d="M17.2539 48.7627H21.9674L31.9281 10.1651L43.3117 48.7627L45.624 41.2033L33.7068 1.62738H29.2601L17.2539 48.7627Z"
									fill="white"
								/>
							</svg>
						</a>
						<span>
							Компания World-bikes специализируется на продаже
							товаров для велосипедного спорта.
						</span>
					</div>
					<div className={styles.Footer__info}>
						<h4 className={styles.Footer__info_title}>Каталог</h4>
						<ul className={`list-reset ${styles.Footer__list}`}>
							<li className={styles.Footer__list_item}>
								<a href="/">Trade-in</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Велосипеды</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Экипировка</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Запчасти</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Велостанки</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Аксессуары</a>
							</li>
						</ul>
					</div>
					<div className={styles.Footer__info}>
						<h4 className={styles.Footer__info_title}>Для клиента</h4>
						<ul className={`list-reset ${styles.Footer__list}`}>
							<li className={styles.Footer__list_item}>
								<a href="/">О нас</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Доставка и оплата</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Блог</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Контакты</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Веломастерская</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Хранение</a>
							</li>
							<li className={styles.Footer__list_item}>
								<a href="/">Гарантии</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.Footer__info} ${styles.Footer__info_contacts}`}>
						<h4 className={styles.Footer__info_title}>Контакты</h4>
						<ul className={`list-reset ${styles.Footer__list}`}>
							<li className={styles.Footer__list_item}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="32"
									viewBox="0 0 33 32"
									fill="none">
									<path
										d="M19.3333 4H8.66667C7.19391 4 6 5.19391 6 6.66667V25.3333C6 26.8061 7.19391 28 
										8.66667 28H19.3333C20.8061 28 22 26.8061 22 25.3333V6.66667C22 5.19391 20.8061 4 
										19.3333 4Z"
										stroke="#4C4C4C"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M14 24.0133V24"
										stroke="#4C4C4C"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<div>
									<a href="/">+7(495)055-75-86</a>
									<a href="/">+7(495)055-75-86</a>
								</div>
							</li>
							<li className={styles.Footer__list_item}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="32"
									viewBox="0 0 33 32"
									fill="none">
									<g clip-path="url(#clip0_1926_501)">
										<path
											d="M21.4038 29.8148L24.6542 5.51823L5.23796 20.4815L15.3209 21.684L21.4038 29.8148Z"
											stroke="#4C4C4C"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1926_501">
											<rect
												width="32"
												height="32"
												fill="white"
												transform="translate(0.666504)"
											/>
										</clipPath>
									</defs>
								</svg>

								<address>г. Москва, ул. Доватора, 7/8 с1</address>
							</li>
							<li className={styles.Footer__list_item}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="32"
									viewBox="0 0 33 32"
									fill="none">
									<path
										d="M28.6667 6.66699H7.33333C6.96515 6.66699 6.63181 6.81623 6.39052 7.05751C6.14924 7.29881
										 6 7.63214 6 8.00033V24.0003C6 24.7367 6.59696 25.3337 7.33333 25.3337H28.6667C29.4031 25.3337 
										 30 24.7367 30 24.0003V8.00033C30 7.63214 29.8508 7.29881 29.6095 7.05751C29.3681 6.81623 
										 29.0348 6.66699 28.6667 6.66699Z"
										stroke="#4C4C4C"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M6.39062 7.05762L16.1145 16.7814C17.1558 17.8229 18.8444 17.8229 19.8857 16.7814L29.6096 7.05762"
										stroke="#4C4C4C"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<a href="/">order@world-bike.ru</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.Footer__copyright}>
					<span>© 2023 world bike</span>
					<a href="/">Пользовательское соглашение</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
