import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const mockAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(fetch('/products.json'))
        , 2000);
    })
}

export const ItemDetailContainer = () => {
    const { id: itemId } = useParams();
    
    const [data, setData] = useState([]);
    useEffect(() => {
        mockAPI()
        .then(res => res.json())
        .then((data) => setData(data));
    }, []);

    const getItem = data.find(item => (item.id == itemId))

    return (
        <div className='detail-container'>
            <ItemDetail data={getItem} />
        </div>
    )
}