import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import detailsPut from '../utils/detailsPut';


function EditDetails() {
    const { editDetails, setEditDetails } = useContext(AppContext);
    const { index, id } = useParams();
    const history = useHistory();

    const handleChange = (e) => {
        setEditDetails({ ...editDetails, [e.target.name]: e.target.value });
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        const {price, color} = editDetails;
        const data = await detailsPut(index, id, price, color)
        if(typeof data === 'string') {
            alert(data);
            setEditDetails({price: '', color: ''});
        }else {
            alert(data.message)
            setEditDetails({price: '', color: ''});
            history.push(`/details-product-${id}`)
        }
    }
    return (
    <>
    <Link to={`/details-product-${id}`} className='link' >Return</Link>
    <div className='edit-product-container'>
        <form className='edit-product-form' action="">
        <input
        value={editDetails.color }
        name='color'
        type="text"
        placeholder='Color'
        onChange={handleChange}
        />
        <input
        value={editDetails.price }
        name='price'
        type="text"
        placeholder='Price'
        onChange={handleChange}
        />
        <button onClick={handleEdit} >Edit</button>
        </form>
    </div>
    </>
    )
}

export default EditDetails