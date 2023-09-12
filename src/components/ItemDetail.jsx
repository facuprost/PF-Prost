import { Item } from "./Item"
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({data}) => {
    return (
        <div className="detail">
            {
                data ? (
                        <div className="detail-card">
                            <img className="detail-card-img" src={data.image} alt="product-image" />
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <p>$ {data.price}</p>
                        </div>
                ) : null
            }
            {
                data ? <ItemCount stock={data.stock} initial="1" /> : null
            }
        </div>
    )
}