import React, { useState, useEffect }  from 'react'

function Inventory({id}) {
    

    const [stock, setStock] = useState(0);
    const [sales, setSales] = useState(0);

useEffect(() => {
    async function loadData() {
        const response = await fetch('https://app.snipcart.com/api/products/'+id, {
            headers: {
                'Authorization': `Basic ${btoa('ST_NjE4OTlmODgtZmVhNy00NjAwLWE0MzAtZWI4NzRiZjhjYmEwNjM3NzMzNzMyMjcyMDkxMjQx')}`,
                'Accept': 'application/json'
            }})

        const posts = await response.json();
        setStock(JSON.stringify(posts.stock));
        setSales(JSON.stringify(posts.statistics.numberOfSales));
    }

    loadData();
}, []);

    return (
        <div>
            <p>{stock-sales} spots left</p>
        </div>
    )
}

export default Inventory
