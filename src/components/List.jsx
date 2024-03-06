import { useHistory } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import ListCard from './reusables/ListCard'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'
import productsGet from '../utils/productsGet'

function List() {
  const { productsList, setProductsList } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  useEffect(() => {
    const updateApi = async () => {
          const allProducts = await productsGet();
          setProductsList(allProducts);
    }
    updateApi();
  },[setProductsList])

  return (
    <div className='list-card-container' >
      <Link to='/add-product' className='link' >Add Product</Link>
      <button className='link' onClick={handleClick}>Logout</button>
      <hr />
      <h1>Products</h1>
      {productsList.map((product) => (
        <ListCard key={product.id} product={product} productId={product.id} />
      ))}
    </div>
  )
}

export default List