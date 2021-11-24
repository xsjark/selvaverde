import React, { useState, useEffect }  from 'react'

function Inventory() {
    const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://app.snipcart.com/api/products`, {
        headers: {
            'Authorization': `Basic ${btoa('Mjk4NmY4YTQtYzEyNi00MDc1LWEyZDEtMWU3YjIzNzUyMzQ2NjM3NzMyNzQ0NDM4MzA4Mjk3')}`,
            'Accept': 'application/json'
        }
     })
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData)
      }) // set data for the number of stars
  }, [])
    return (
        <div>
            <p>{starsCount}</p>
        </div>
    )
}

export default Inventory
