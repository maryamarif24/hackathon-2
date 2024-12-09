import React from 'react'
import Image from 'next/image'

const toppicks = () => {
  return (
    <div className="top-picks">
        <div className="top-picks-header">
            <div className="top-picks-header-content">
                <div className="tphc-1">Top Picks For You</div>
                <div className="tphc-2">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>
            </div>
        </div>
        <div className="top-picks-content">
            <div className="container-1">
                <div className="container-img">
                    <Image
                        src="/Images/Trenton.PNG"
                        width={250}
                        height={250}
                        alt='trenton'
                    />
                </div>
                <div className="container-text">
                    <p>Trenton modular sofa_3</p>
                    <h2>Rs. 25,000.00</h2>
                </div>
            </div>
            <div className="container-2">
                <div className="container-img-2">
                    <Image
                        src="/Images/ChairSet.PNG"
                        width={350}
                        height={250}
                        alt='ChairSet'
                    />
                </div>
                <div className="container-text-2">
                    <p>Granite dining table with dining chair</p>
                    <h2>Rs. 25,000.00</h2>
                </div>
            </div>
            <div className="container-3">
                <div className="container-img-3">
                    <Image
                        src="/Images/StoolSet.PNG"
                        width={250}
                        height={250}
                        alt='StoolSet'
                    />
                </div>
                <div className="container-text-3">
                    <p>Outdoor bar table and stool</p>
                    <h2>Rs. 25,000.00</h2>
                </div>
            </div>
            <div className="container-4">
                <div className="container-img-4">
                    <Image
                        src="/Images/OpenTable.PNG"
                        width={250}
                        height={250}
                        alt='OpenTable'
                    />
                </div>
                <div className="container-text-4">
                    <p>Plain console with teak mirror</p>
                    <h2>Rs. 25,000.00</h2>
                </div>
            </div>
        </div>
        <div className="more-btn">
            <div className="item-text">
                <p>View More</p>
            </div>
        </div>
    </div>
)
}

export default toppicks