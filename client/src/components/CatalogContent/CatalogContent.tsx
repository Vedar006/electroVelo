import React from 'react'

import Filters from '@components/Filters/Filters'
import CatalogSort from '@components/CatalogSort/CatalogSort'
import CatalogView from '@components/CatalogView/CatalogView'
import Card from '@components/Card/Card'
import Pagination from '@components/Pagination/Pagination'


import { ICard } from 'Card'

import { useCatalog } from './useCatalog'

import styles from './CatalogContent.module.scss'

const CatalogContent: React.FC = () => {
	const { products, totalPages, page, setPage, isLoading, isSuccess } = useCatalog()
	return (
		<section className={styles.CatalogContent}>
			<div className="container">
				<div className={styles.CatalogContent__wrapper}>
					<Filters />
					<div className={styles.CatalogContent__right}>
						<div className={styles.CatalogContent__top}>
							<CatalogSort />
							<CatalogView />
						</div>
						<div className={styles.CatalogGoods}>
							<ul
								className={`list-reset ${styles.CatalogGoods__list}`}>
								{isLoading
									? 'Loading...'
									: isSuccess
										? products.map((item: ICard) => (
											<Card
												type="secondary"
												id={item.id}
												otherClass={
													styles.CatalogGoods__card
												}
												price={item.price}
												title={item.title}
												available={item.available}
												images={item.previewImage}
												countrySrc={item.country}
												key={item.id}
											/>
									  ))
										: 'Error'}
							</ul>
						</div>
						<Pagination
							totalPages={totalPages}
							setPage={setPage}
							page={page}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CatalogContent