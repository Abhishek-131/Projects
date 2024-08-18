import React from 'react'
import "./GoogleMap.css"

const GoogleMap = () => {
  return (
    <>
    <div>
        <div className="address">
          Tomato Fast Food Restaurant<br></br>
          10 No. Market, Bhopal, Madhya Pardesh - 462003
        </div>
        <br />
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4139664026243!2d77.4071033748446!3d23.26440330726124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c692737bd43f9%3A0x2669d0742fa2b42c!2sFood%20delivery%20in%20train%20or%20all%20bhopal!5e0!3m2!1sen!2sin!4v1713769450106!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
   
  )
}

export default GoogleMap