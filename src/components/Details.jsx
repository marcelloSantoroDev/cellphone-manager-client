import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './CSS/Details.css';
import { Link } from 'react-router-dom';
import productsGet from '../utils/productsGet';
import detailsDelete from '../utils/detailsDelete';

function Details() {
    const { productsList, setProductsList, setAddProduct } = useContext(AppContext);
    const { id } = useParams();
    const urlId = id;
    const product = productsList.find(product => product.id === +id);
    const history = useHistory();

    const handleEditPush = (i) => {
      history.push(`/edit-details-product-${id}/${i}`)
    }

    useEffect(() => {
    const updateApi = async () => {
          const allProducts = await productsGet();
          setProductsList(allProducts);
    }
    updateApi();
  },[setProductsList])


    const updateApi = async () => {
    const allProducts = await productsGet();
    setProductsList(allProducts);
    return allProducts;
  };

  const handleRemove = async (e) => {
    const {id} = e.target;
    await detailsDelete(id, urlId);
    const allProducts = await updateApi();
    const {name, brand, model, data} = allProducts.find(product => product.id === +urlId);
    if(data.length === 0) {
      alert("Please add some details to your product")
      setAddProduct({name, brand, model});
      history.push('/add-product')
    }
  }

  return (
    <div>
      <Link to='/products-list' className='link' >Return</Link>
    <div className='main-info'>
    <p><strong>{product.name}</strong> </p>
    </div>
    {product.data.map(({price, color}, index)=> (
      <div className='price-color-container' key={index}>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Price:</strong> {price}</p>
    <div className='buttons-container'>
    <button className='edit-button' onClick={() => handleEditPush(index)} >Edit</button>
    <button  className='remove-button' id={index} onClick={handleRemove}>Remove</button>
    </div>
      </div>
    ))}
    </div>
  )
}

export default Details