import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const arrivals = () => {
  return (
    <div className="arrivals">
        <div className="arrivals-img">
            <Image
                src="/Images/SofaSet.PNG"
                width={900}
                height={900}
                alt="Sofa Set"
            />
        </div>
        <div className="arrivals-container">
            <div className="arrivals-text">
                <div className="a-text">
                    <p>New Arrivals</p>
                    <h1>Asgaard sofa</h1>
                </div>
            </div>
            <Button variant="outline" size="outline" className="arrivals-btn">Order Now</Button>
        </div>
    </div>
)
}

export default arrivals