import React from 'react'

function Product({img, infoOne, infoTwo, titleOne, titleTwo}) {
  return (
    <div className="product">
        <div className="productInfo">
            <img src={img} alt="furniture" />
            <div className="text">
                <h4>{infoOne}</h4>
                {/* <h4>{infoTwo}</h4> */}
            </div>
            
        </div>

        <div className="productTitle">
            <h1>{titleOne}</h1>
            <h1>{titleTwo}</h1>
        </div>
    </div>
  )
}

export default Product