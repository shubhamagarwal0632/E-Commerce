import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const SearchItem = () => {
  const {term}  =  useParams();
  const [filterdata, setFilterData]=useState([])

  useEffect(()=>{
    const filterdata1 = items.filter((kuchbhi)=>kuchbhi.description.toLowerCase().includes(term.toLowerCase()))
    const filterdata2 = items.filter((kuchbhi)=>kuchbhi.category.toLowerCase().includes(term.toLowerCase()))

    if(filterdata1 || filterdata2){

      setFilterData(filterdata1)
      // setFilterData(filterdata2)
    }
    
  },[term])
  return (
    <div>
      <Product items={filterdata}/>

    </div>
  ) 
}

export default SearchItem
