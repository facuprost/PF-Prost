import { useState } from "react";

export const ItemCount = ({stock, initial}) => {

    const [qty, setQty] = useState(Number(initial));

    const onSubs = () => {
        if(qty > 0) {
            setQty(qty - 1);
        }
    }

    const onAdd = () => {
        if(qty < stock) {
            setQty(qty +1);
        }
    }

    return (
        <div className="detail-count">
            <button onClick={onSubs}>-</button>
            <span>{ qty }</span>
            <button onClick={onAdd}>+</button>
        </div>
    )
}