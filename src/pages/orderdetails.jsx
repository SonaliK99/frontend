import React, { useState } from 'react';
import './CSS/orderdetails.css';
import { useLocation } from 'react-router-dom';

const OrderDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const total = searchParams.get('total');

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        pincode: '',
        state: '',
        city: '',
        gender: 'male'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, for example, send data to server or perform validation
        console.log(formData);
    };

    return (
        <div className="OrderDetails">
            <h2 >Order Details</h2>
            <form onSubmit={handleSubmit}  className="OrderDetails-container">
                <div className="OrderDetails-fields">
                <div >
                    <label>Name:</label>
                    <input type="text" name="name"  value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone No:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Pin code:</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                </div>
                <div>
                    <label>State:</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" className='Ratio-field' value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                <p>Total: {total || ''} Rs</p> {/* Provide default value if total is null */}
                </div>
                <button type="submit" className="OrderDetails-container" >Make a Payment</button>
                </div>
            </form>
        </div>
    );
};

export default OrderDetails;
