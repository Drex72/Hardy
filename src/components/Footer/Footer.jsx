import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo">
            Logo
        </div>
        <marquee className="sliding-text" width="100%" direction="left" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime vero porro, accusamus repellat autem delectus nihil explicabo amet eaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam qui illum totam tenetur pariatur repellat deserunt vero nam vitae, libero ad facere aut unde reiciendis consequuntur, eaque nisi quaerat adipisci est minima placeat animi.
        </marquee>
    </div>
  )
}

export default Footer