import React from 'react'

import styles from './Pagination.module.scss'

interface PaginationProps {
	totalPages:number;
	setPage:(pageNum:number)=> void;
	page:number;
}

const Pagination: React.FC<PaginationProps> = props => {
	const {
		totalPages,
		setPage,
		page,
	} = props
	const arrPages = [];
	for(let i =0;i<totalPages;i++) 
	{
		arrPages.push(i);
	}
	return (
		<div className={styles.Pagination}>
			<button className={`btn-reset ${styles.Pagination__first}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none">
					<path
						d="M6.518 2.17495L0.500139 8.47495C0.428711 8.54995 0.378235 
										8.6312 0.348711 8.7187C0.318711 8.8062 0.303711 8.89995 0.303711 
										8.99995C0.303711 9.09995 0.318711 9.1937 0.348711 9.2812C0.378235
										 9.3687 0.428711 9.44995 0.500139 9.52495L6.518 15.8437C6.68466 
										 16.0187 6.893 16.1062 7.143 16.1062C7.393 16.1062 7.60728 16.0125 
										 7.78585 15.825C7.96443 15.6375 8.05371 15.4187 8.05371 15.1687C8.05371 
										 14.9187 7.96443 14.7 7.78585 14.5125L2.53585 8.99995L7.78585 
										 3.48745C7.95252 3.31245 8.03585 3.09695 8.03585 2.84095C8.03585 
										 2.58445 7.94657 2.36245 7.768 2.17495C7.58943 1.98745 7.38109 
										 1.8937 7.143 1.8937C6.9049 1.8937 6.69657 1.98745 6.518 2.17495Z"
						fill="#777777"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none">
					<path
						d="M6.518 2.17495L0.500139 8.47495C0.428711 8.54995 0.378235 
										8.6312 0.348711 8.7187C0.318711 8.8062 0.303711 8.89995 0.303711 
										8.99995C0.303711 9.09995 0.318711 9.1937 0.348711 9.2812C0.378235
										 9.3687 0.428711 9.44995 0.500139 9.52495L6.518 15.8437C6.68466 
										 16.0187 6.893 16.1062 7.143 16.1062C7.393 16.1062 7.60728 16.0125 
										 7.78585 15.825C7.96443 15.6375 8.05371 15.4187 8.05371 15.1687C8.05371 
										 14.9187 7.96443 14.7 7.78585 14.5125L2.53585 8.99995L7.78585 
										 3.48745C7.95252 3.31245 8.03585 3.09695 8.03585 2.84095C8.03585 
										 2.58445 7.94657 2.36245 7.768 2.17495C7.58943 1.98745 7.38109 
										 1.8937 7.143 1.8937C6.9049 1.8937 6.69657 1.98745 6.518 2.17495Z"
						fill="#777777"
					/>
				</svg>
			</button>
			<button className={`btn-reset ${styles.Pagination__prev}`} onClick={()=> setPage(page-1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none">
					<path
						d="M6.518 2.17495L0.500139 8.47495C0.428711 8.54995 0.378235 
										8.6312 0.348711 8.7187C0.318711 8.8062 0.303711 8.89995 0.303711 
										8.99995C0.303711 9.09995 0.318711 9.1937 0.348711 9.2812C0.378235
										 9.3687 0.428711 9.44995 0.500139 9.52495L6.518 15.8437C6.68466 
										 16.0187 6.893 16.1062 7.143 16.1062C7.393 16.1062 7.60728 16.0125 
										 7.78585 15.825C7.96443 15.6375 8.05371 15.4187 8.05371 15.1687C8.05371 
										 14.9187 7.96443 14.7 7.78585 14.5125L2.53585 8.99995L7.78585 
										 3.48745C7.95252 3.31245 8.03585 3.09695 8.03585 2.84095C8.03585 
										 2.58445 7.94657 2.36245 7.768 2.17495C7.58943 1.98745 7.38109 
										 1.8937 7.143 1.8937C6.9049 1.8937 6.69657 1.98745 6.518 2.17495Z"
						fill="#777777"
					/>
				</svg>
			</button>
			<ul className={`list-reset ${styles.Pagination__list}`}>
				 {
					arrPages.map((pageNum:number)=><li 
						className={`${styles.Pagination__item} ${page===pageNum+1&&styles.active}`} 
						onClick={()=>setPage(pageNum+1)}>{pageNum+1}</li>)
				 }
			</ul>
			<button className={`btn-reset ${styles.Pagination__next}`} onClick={()=> setPage(page+1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none">
					<path
						d="M3.482 2.17495L9.49986 8.47495C9.57129 8.54995 9.62177 8.6312 9.65129 8.7187C9.68129
									 8.8062 9.69629 8.89995 9.69629 8.99995C9.69629 9.09995 9.68129 9.1937 9.65129 9.2812C9.62177 
									 9.3687 9.57129 9.44995 9.49986 9.52495L3.482 15.8437C3.31534 16.0187 3.107 16.1062 2.857 
									 16.1062C2.607 16.1062 2.39272 16.0125 2.21415 15.825C2.03557 15.6375 1.94629 15.4187 1.94629 
									 15.1687C1.94629 14.9187 2.03557 14.7 2.21415 14.5125L7.46415 8.99995L2.21415 3.48745C2.04748 
									 3.31245 1.96415 3.09695 1.96415 2.84095C1.96415 2.58445 2.05343 2.36245 2.232 2.17495C2.41057 
									 1.98745 2.61891 1.8937 2.857 1.8937C3.0951 1.8937 3.30343 1.98745 3.482 2.17495Z"
						fill="#777777"
					/>
				</svg>
			</button>
			<button className={`btn-reset ${styles.Pagination__last}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none">
					<path
						d="M3.482 2.17495L9.49986 8.47495C9.57129 8.54995 9.62177 8.6312 9.65129 8.7187C9.68129
									 8.8062 9.69629 8.89995 9.69629 8.99995C9.69629 9.09995 9.68129 9.1937 9.65129 9.2812C9.62177 
									 9.3687 9.57129 9.44995 9.49986 9.52495L3.482 15.8437C3.31534 16.0187 3.107 16.1062 2.857 
									 16.1062C2.607 16.1062 2.39272 16.0125 2.21415 15.825C2.03557 15.6375 1.94629 15.4187 1.94629 
									 15.1687C1.94629 14.9187 2.03557 14.7 2.21415 14.5125L7.46415 8.99995L2.21415 3.48745C2.04748 
									 3.31245 1.96415 3.09695 1.96415 2.84095C1.96415 2.58445 2.05343 2.36245 2.232 2.17495C2.41057 
									 1.98745 2.61891 1.8937 2.857 1.8937C3.0951 1.8937 3.30343 1.98745 3.482 2.17495Z"
						fill="#777777"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="18"
					viewBox="0 0 10 18"
					fill="none">
					<path
						d="M3.482 2.17495L9.49986 8.47495C9.57129 8.54995 9.62177 8.6312 9.65129 8.7187C9.68129
									 8.8062 9.69629 8.89995 9.69629 8.99995C9.69629 9.09995 9.68129 9.1937 9.65129 9.2812C9.62177 
									 9.3687 9.57129 9.44995 9.49986 9.52495L3.482 15.8437C3.31534 16.0187 3.107 16.1062 2.857 
									 16.1062C2.607 16.1062 2.39272 16.0125 2.21415 15.825C2.03557 15.6375 1.94629 15.4187 1.94629 
									 15.1687C1.94629 14.9187 2.03557 14.7 2.21415 14.5125L7.46415 8.99995L2.21415 3.48745C2.04748 
									 3.31245 1.96415 3.09695 1.96415 2.84095C1.96415 2.58445 2.05343 2.36245 2.232 2.17495C2.41057 
									 1.98745 2.61891 1.8937 2.857 1.8937C3.0951 1.8937 3.30343 1.98745 3.482 2.17495Z"
						fill="#777777"
					/>
				</svg>
			</button>
		</div>
	)
}

export default Pagination
