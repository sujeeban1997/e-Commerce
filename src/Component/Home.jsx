import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="/hero.jpg" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center border-0">
                        <p className="card-title fw-bolder banner-titles">New Session Arrivals</p>
                        <p className="card-text fs-1 fw-bold"><small>Check out all the trends</small></p>
                    </div>
            </div>

            <Products />
        </div>
    )
}

export default Home