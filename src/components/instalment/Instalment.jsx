import React from 'react'
import "./Instalment.css"
import Products from '../products/Products';

function Instalment({productsData}) {
    console.log(productsData);
    
    return (
        <div className='instalment'>
            <div className="header">
                <img src="https://olcha.uz/image/original/homePage/nUGQLN7Avr6JVOLtipm172yTPWDfKrPbsCpBGvb5YQaXiD8Qb5NHpckPU7yp." alt="" />
            </div>
            <div className="pro_duct">
                <div className="right">
                    <div className="product_item">
                        <div className="img_div">
                            <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-24/W8coPWYRzc6yR0iXSnaUL6vKxv7MRkF4KCCrYCk9672yfFt350bsGHH62atj.JPG" alt="telefon_img" />
                        </div>
                        <div className="data">
                            <p className='title'>Xiaomi Redmi note 13 <br /> Midnight Black 6/128 GB</p>
                            <s className='chegirma'>2 650 000 so'm</s>
                            <p className='price'>2 187 000 so'm</p>
                            <span className='perMonth'>268 000 so'm x 12 oy</span>
                        </div>
                    </div>
                    <div className="product_item">
                        <div className="img_div">
                            <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-24/W8coPWYRzc6yR0iXSnaUL6vKxv7MRkF4KCCrYCk9672yfFt350bsGHH62atj.JPG" alt="telefon_img" />
                        </div>
                        <div className="data">
                            <p className='title'>Xiaomi Redmi note 13 <br /> Midnight Black 6/128 GB</p>
                            <s className='chegirma'>2 650 000 so'm</s>
                            <p className='price'>2 187 000 so'm</p>
                            <span className='perMonth'>268 000 so'm x 12 oy</span>
                        </div>
                    </div>

                </div>
                <div className="left">
                 <Products  productsData={productsData}/>
                </div>
            </div>
        </div>
    )
}

export default Instalment