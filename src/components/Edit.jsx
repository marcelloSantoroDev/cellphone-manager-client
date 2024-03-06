import { useParams } from 'react-router-dom';
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom'
import './CSS/Edit.css'
import productsPut from '../utils/productsPut';

function Edit() {
  const { editProduct, setEditProduct } = useContext(AppContext);
  const {id} = useParams();
  const history = useHistory();

    const handleChange = (e) => {
    const {name, value} = e.target;
    setEditProduct({...editProduct, [name]: value});
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const {name, brand, model} = editProduct;
    const data = await productsPut(id, name, brand, model);
    if(typeof data === 'string') {
      alert(data);
      setEditProduct({name: '', brand: '', model: ''});
    } else {
      alert(data.message)
      setEditProduct({name: '', brand: '', model: ''});
      history.push('/products-list');
    }
  }

  return (
      <>
      <Link to='/products-list' className='link' >Return</Link>
      <hr />
      <div className='edit-product-container'>
      <form className='edit-product-form' action="">
        <input
        value={editProduct.name }
        name='name'
        type="text"
        placeholder='Name'
        onChange={handleChange}
        />
        <input
        value={editProduct.brand }
        name='brand'
        type="text"
        placeholder='Brand'
        onChange={handleChange}
        />
        <input
        value={editProduct.model }
        name='model'
        type="text"
        placeholder='Model'
        onChange={handleChange}
        />
        <button onClick={handleEdit}>Edit</button>
      </form>
    </div>
    </>
  )
}

export default Edit