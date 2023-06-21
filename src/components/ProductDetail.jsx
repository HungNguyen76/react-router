import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

export default function ProductDetail() {
    const [productDetail, setProductDetail] = useState(JSON.parse(localStorage.getItem('product')))
    
    const params = useParams()
    function showProductDetail (id) {
        for(let i in productDetail) {
            if(Number(productDetail[i].id) === Number(id)) {
                return productDetail[i]
            }         
        }
        return null
    }
    const [productShow, setProductShow] = useState(null)

    useEffect(() => {
        setProductShow(showProductDetail(params.id))
    }, [params])
    return (
    <div className='container w-100'>
        <Image src={productShow?.img} fluid />
    </div>
  )
}
