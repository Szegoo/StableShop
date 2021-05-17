import Item from './Item';
import { useAsync } from "react-async";
import { useEffect } from 'react';
import { useState } from 'react';
import GetProducts from './queries/GetProducts';

async function getPrice() {
    let price;
    await fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH')
        .then(res => res.text())
        .then((responseText) => {
            price = responseText;
        });
    console.log(price);
    return price;
}
window.addEventListener('load', () => {
    let fetchInterval = 10000;
    setInterval(getPrice, fetchInterval);
})
function Items(props) {
    const { products } = props;
    var { data, error, isPending } = useAsync({ promiseFn: getPrice });
    if (isPending) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    if (data) {
        return (
            <div className="grid">
                {products.map((product, key) => {
                    return <Item key={key} product={product} data={data} />
                })}
            </div>
        )
    }
}
export default function ItemContainer() {
    return (
        <GetProducts>
            <Items />
        </GetProducts>
    )
}