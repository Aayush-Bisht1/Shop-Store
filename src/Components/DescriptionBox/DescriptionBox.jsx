import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet serve as a virtual marketplace where businesses and individual can showcase their products, interact with customer, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services a detailed desciption, images, prices, and any available variables(e.g., sizes, colors). Each product usually has its own dedicated relevant information. </p>
        </div>
    </div>
  )
}

export default DescriptionBox