import React, { useEffect, useState } from 'react'
import MainText from '../MainText/MainText'
import "./VideoContent.css"
import data from '../../Data/mockResponse.json'
import Carousel from '../Carousel/Carousel'
import video from '../../Assets/video1.mp4'

const VideoContent = () => {
    const carousels = [
        {
            id: 1,
            videoUrl:'',
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 2,
            videoUrl:'',
            imgUrl: "https://www.himama.com/assets/design_system/share-daily-activities-table-kids-b5f70e613702294fa0ec2052f57aedd94e25150c2396eb348a2ec0795e432a25.svg",
            imgText: "Send HiMama’s Daily Activities to your families!",
            imgLink: "Learn More",
        },
        {
            id: 3,
            videoUrl:'',
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
                    <Carousel duration="10000">
                        {carousels.map((element) => (
                            
                            <div className="video-content" >
                                <video width="100%" height="100%" autoPlay="autoplay" preload='auto' muted loop >
                                    <source src={video} type="video/mp4"/>
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
                </div>
            </div>
            <div className="video-content-container">
                <div className="text" style={{ order:2}}>
                    <MainText main="NAMSAN'S" sub="SPECIALS"  />
                </div>                 
                <div className="videos-content-new">
                    <Carousel duration="5000">
                        {data.map((elem) => (
                            <div className="video-content" style={{order:1}}>
                                <iframe width="220" height="205" src={elem.url} frameBorder="0" ></iframe>
                                <div className="video-text">
                                    {elem.author}
                                </div>
                            </div>  

                        ))}
                    </Carousel>
                </div>
            </div>
            
        </div>
        
    )
}

export default VideoContent
