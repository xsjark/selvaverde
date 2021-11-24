import React, { useState, useEffect }  from 'react'

function Inventory() {
    

const [data, setData] = useState(null);
useEffect(() => {
    async function loadData() {
        const response = await fetch('https://app.snipcart.com/api/orders', {
            headers: {
                'Authorization': `Basic ${btoa('Mjk4NmY4YTQtYzEyNi00MDc1LWEyZDEtMWU3YjIzNzUyMzQ2NjM3NzMyNzQ0NDM4MzA4Mjk3')}`,
                'Accept': 'application/json'
            }})

        const posts = await response.json();
        setData(JSON.stringify(posts));
    }

    loadData();
}, []);

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default Inventory
