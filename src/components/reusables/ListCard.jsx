import React, { useContext } from 'react';
import './CSS/ListCard.css';
// import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom'; 
import productDelete from '../../utils/productDelete';
import AppContext from '../../context/AppContext';

function ListCard(props) {
    const {name, brand, model, id} = props.product;
    const { setProductsList } = useContext(AppContext);
    const history = useHistory();

    const handleRemove = async () => {
      await productDelete(id);
      setProductsList(prevList => prevList.filter(product => product.id !== id));
    } 

    const handleEditPush = () => {
      history.push(`/edit-product-${id}`);
    }

    const handleDetailsPush = () => {
      history.push(`/details-product-${id}`);
    }

  return (
    <div className='card-container'>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Brand:</strong> {brand}</p>
    <p><strong>Model:</strong> {model}</p>
    <div className='buttons-container'>
    <button className='details-button' onClick={handleDetailsPush}>Details</button>
    <button className='edit-button' onClick={handleEditPush}>Edit</button>
    <button onClick={handleRemove} className='remove-button'>Remove</button>
    </div>
    </div>
  )
}

export default ListCard