import React from 'react' 
import './newletter.css'

const Newsletter =() => {
 return (
    <div className='newsletter'>
<h1>Get Exclusive Offers on your Email </h1>
<p>Subcribe to our newletter and stay updated</p>
    <div>
    <input type="email" placeholder='Your Email id' />
    <button>Subcribe</button>
    </div>
    </div>
 )
}

export default Newsletter