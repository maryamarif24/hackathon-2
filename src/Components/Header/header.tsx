import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div className="header">
        <div className="header-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
        <div className="header-btns">
            <div className="btns">
                <Image
                    src="/Images/Account.svg"
                    width={28}
                    height={28}
                    alt="Account"
                />
                <Image
                    src="/Images/Search.svg"
                    width={28}
                    height={28}
                    alt="Search"
                />
                <Image
                    src="/Images/WishList.svg"
                    width={28}
                    height={28}
                    alt="Wishlist"
                />
                <Image
                    src="/Images/Cart.svg"
                    width={28}
                    height={28}
                    alt="Cart"
                />
            </div>
        </div>
    </div>
)
}

export default header