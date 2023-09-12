import { NavLink } from "react-router-dom"

export const Item = ({data}) => {


    return (
        <>
            {
                data ? (
                    <div className="item">
                        <NavLink key={data.id} to={`/item/${data.id}`} >
                            <img className="item-card-img" src={data.image} alt="product-image" />
                            <h5>{data.title}</h5>
                            <p>$ {data.price}</p>
                        </NavLink>
                    </div>
                ) : null
            }
        </>
    )
}