import React, { useEffect, useState } from 'react'
import MainText from '../MainText/MainText'
import "./VideoContent.css"
import Carousel from '../Carousel/Carousel'
import video1 from '../../Assets/Videos/video11.mp4'
import video2 from '../../Assets/Videos/video12.mp4'
import video3 from '../../Assets/Videos/video13.mp4'
import video4 from '../../Assets/Videos/video14.mp4'
import video5 from '../../Assets/Videos/video31.mp4'
import video6 from '../../Assets/Videos/video32.mp4'
import video7 from '../../Assets/Videos/video33.mp4'
import video8 from '../../Assets/Videos/video34.mp4'

const VideoContent = () => {
    const carousel1 = [
        {
            id: 1,
            videoUrl:video1,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 2,
            videoUrl:video2,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 3,
            videoUrl:video3,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 4,
            videoUrl:video4,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
    ]
    const carousel2 = [
        {
            id: 1,
            videoUrl:video5,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 2,
            videoUrl:video6,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 3,
            videoUrl:video7,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 4,
            videoUrl:video8,
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
    ]

    return ( 
        <div className="videosContainer">
            <div className="video-content-container">
                <div className="text" >
                    <MainText main="TODAY'S" sub="DEALS"  />
                </div>                 
                <div className="videos-content-new">
                    <Carousel duration="25000">
                        {carousel2.map((element) => (
                            
                            <div className="video-content" >
                                <video width="100%" height="50%" autoPlay="autoplay" preload='auto' muted loop >
                                    <source src={element.videoUrl}  type="video/mp4"/>
                                </video>
                                {/* <div className="container">
                                    <div className="ds-banner">
                                        <a href="/">
                                            <div className="ds-banner__content">
                                                <img
                                                    className="ds-banner__image"
                                                    src={element.imgUrl}
                                                />
                                                <div className="ds-banner__text">
                                                    {element.imgText}
                                                    <span>{element.imgLink}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>  */}
                            </div>  
                        ))}
                    </Carousel>
                </div>
            </div>            
            {/* <div className="video-content-container">
                <div className="text" style={{order: 2}} >
                    <MainText main="NAMSAN'S" sub="SPECIALS"  />
                </div>                 
                <div className="videos-content-new" style={{order:1}}>
                    <Carousel duration="60000">
                        {carousel1.map((element) => (
                            
                            <div className="video-content" >
                                <video width="100%" height="100%" autoPlay="autoplay" preload='auto' muted loop >
                                    <source src={element.videoUrl}  type="video/mp4"/>
                                </video>
                                <div className="container">
                                    <div className="ds-banner">
                                        <a href="/">
                                            <div className="ds-banner__content">
                                                <img
                                                    className="ds-banner__image"
                                                    src={element.imgUrl}
                                                />
                                                <div className="ds-banner__text">
                                                    {element.imgText}
                                                    <span>{element.imgLink}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div> 
                            </div>  
                        ))}
                    </Carousel>
                </div> */}
            </div>            
    )
}

export default VideoContent
