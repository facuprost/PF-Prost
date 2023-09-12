import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";

const mockAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(fetch('/products.json'))
        , 2000);
    })
}

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        mockAPI()
        .then(res => res.json())
        .then((data) => setData(data));
    }, []);
	
    const {id: catId} = useParams();
    const items = catId ? data.filter(item => item.category == catId) : data;
    
    return (
        <div className="item-container">
            <ItemList data={items} />
        </div>
    );

};

export default ItemListContainer;