import React from 'react'
import Image from 'next/image'

const blogs = () => {
  return (
    <div className="blogs">
        <div className="blog-header">
            <div className="blog-header-content">
                <div className="bhc-1">Our Blogs</div>
                <div className="bhc-2">Find a bright ideal to suit your taste with our great selection</div>
            </div>
        </div>
        <div className="blog-content">
            <div className="b-c-details">
                <div className="b-c-d-1">
                    <div className="bcd1-img">
                        <Image
                            src="/Images/Blog1.svg"
                            width={393}
                            height={393}
                            alt="Blog 1"
                        />
                    </div>
                    <div className="bcd1-text">
                        <p>Going all-in with millennial design</p>
                        <div className="bcd-text">
                            <p>Read More</p>
                        </div>
                        <div className="blog-read-time">
                            <div className="time">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>5 min</p>
                            </div>
                            <div className="calendar">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-c-d-2">
                    <div className="bcd1-img">
                        <Image
                            src="/Images/Blog2.svg"
                            width={393}
                            height={393}
                            alt="Blog 1"
                        />
                    </div>
                    <div className="bcd1-text">
                        <p>Going all-in with millennial design</p>
                        <div className="bcd-text">
                            <p>Read More</p>
                        </div>
                        <div className="blog-read-time">
                            <div className="time">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>5 min</p>
                            </div>
                            <div className="calendar">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-c-d-3">
                    <div className="bcd1-img">
                        <Image
                            src="/Images/Blog3.svg"
                            width={393}
                            height={393}
                            alt="Blog 1"
                        />
                    </div>
                    <div className="bcd1-text">
                        <p>Going all-in with millennial design</p>
                        <div className="bcd-text">
                            <p>Read More</p>
                        </div>
                        <div className="blog-read-time">
                            <div className="time">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>5 min</p>
                            </div>
                            <div className="calendar">
                                <Image
                                    src="/Images/Time.svg"
                                    width={18}
                                    height={18}
                                    alt='time'
                                />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blg-button">
                <div className="blog-btn">
                    <div className="blog-text">
                        <p>View All Post</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default blogs