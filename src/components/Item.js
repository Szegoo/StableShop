import AddOrderMutation from './mutations/Order';
import OrderModal from './orderModal/orderModal';
import { useState } from 'react';

const Item = (props) => {
    const { product } = props;
    let newData = JSON.parse(props.data);
    const [modal, setModal] = useState(false)
    return (
        <div className="item">
            <h4 className="item-name">{product.productName}</h4>
            <img className="item-image" src="./images/tastatura1.png" alt={product.productName} />
            <div className="item-details">
                <h4 className="item-price">{newData.ETH.toFixed(4) * product.price + "STT"}</h4>
                <button onClick={() => { setModal(true) }} className="item-buy">Buy</button>
            </div>
            <div>
                {modal &&
                    <OrderModal addOrder={props.addOrder} product={product.id} productPrice={newData.ETH * product.price} />
                }
            </div>
        </div>
    )
}

export default (props) => {
    return (
        <AddOrderMutation>
            <Item data={props.data} product={props.product} />
        </AddOrderMutation>
    )
}