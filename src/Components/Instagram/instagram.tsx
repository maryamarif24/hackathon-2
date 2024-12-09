import React from 'react'
import { Button } from '../ui/button'

const instagram = () => {
  return (
    <div className="instagram">
        <div className="insta-content">
            <div className="insta-content-header">
                <div className="i-c-h-1">Our Instagram</div>
                <div className="i-c-h-2">Follow our store on Instagram</div>
            </div>
            <div className="insta-btn">
                <Button variant="follow" size="follow">Follow Us</Button>
            </div>
        </div>
    </div>
)
}

export default instagram