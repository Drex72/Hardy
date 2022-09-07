import React from 'react'
import Footer from '../components/Footer/Footer'
import MainText from '../components/MainText/MainText'
import Videos from '../components/Videos/Videos'
import './Mainpage.css'

const MainPage = () => {
    let videos = [
    'pRpvdcjkT3k',
    'Te4wx4jtiEA',
    'efTj6UYzvk4'
    ];
    let index=Math.floor(Math.random() * videos.length);
    
  return (
    <div className="mainPage">
        <div className="container"style={{height: "100%"}}>
            <div className="flex" >
                <MainText main="OUR" sub="MENU" />
                <Videos />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default MainPage