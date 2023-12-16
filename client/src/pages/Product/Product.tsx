import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import productService  from '@services/product.service'

import Header from '@components/Header/Header'
import ProductMain from '@components/ProductMain/ProductMain'
import ProductDescription from '@components/ProductDescription/ProductDescription'
import ProductSpecifications from '@components/ProductSpecifications/ProductSpecifications'
import ProductDelivery from '@components/ProductDelivery/ProductDelivery'
import ProductSimilar from '@components/ProductSimilar/ProductSimilar'
import Subscribe from '@components/Subscribe/Subscribe'


import styles from './Product.module.scss';

const Product:React.FC = () => {
	const {id} = useParams();
	//@ts-ignore
	const {data,isLoading,isSuccess} =  useQuery<any>({queryKey:['product',id],queryFn:()=>productService.getProductById(+id)});
	console.log('product',data);
	// console.log('datat',data.data.category);
	return (
		<>
		  <Header otherClass={styles.Product__header}/>
			<main className="Product">
			
				<ProductMain product={isSuccess&&data.data} loading={isLoading} success={isSuccess}/>
				<ProductDescription/>
				<ProductSpecifications  
					 productSpecifications={isSuccess&&data?.data?.specifications} 
					 loading={isLoading}
					 success={isSuccess}/>

				<ProductDelivery/>
				<ProductSimilar category={isSuccess&&data?.data?.category} loading={isLoading} success={isSuccess}/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Product