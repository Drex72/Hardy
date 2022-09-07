import React, { useEffect, useState } from 'react'
import MainText from '../MainText/MainText'
import "./VideoContent.css"
import data from '../../Data/mockResponse.json'
import { Swiper, SwiperSlide } from 'swiper/react'


const VideoContent = ({main, sub, video, textOrder, videoOrder}) => {
    const[videoResponse, setVideResponse] = useState({video: [], isLoading: false, error: ''})



  return (
      <>
      <Swiper 
        breakpoints={{
            320: {
            slidesPerView: 2,
            spaceBetween: 18,
            },
            768: {
            slidesPerView: 3,
            spaceBetween: 20,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        }} 
        className="mainContainerVideos">
        <div className="videos-content-new" >
            <div className="text" style={{ order:textOrder}}>
                <MainText main={main} sub={sub}  />
            </div>
            {data?.map((videos) => {
                return (
                    <SwiperSlide key={videos.url} className="slide">
                        <div className="video-content" style={{order:videoOrder}}>
                            <iframe width="220" height="205" src={videos.url} frameBorder="0" ></iframe>
                            <div className="video-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ratione veritatis perferendis, quaerat asperiores maiores fuga dolorem quidem nesciunt eum?
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })}
        </div>
      </Swiper>
    </>
  )
}

export default VideoContent