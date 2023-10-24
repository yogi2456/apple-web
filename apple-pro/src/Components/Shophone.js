import React, { useState } from 'react'

function Shophone() {

    const [section, firstSection] = useState([
        {
            name : "New",
            heading : "iPhone 15 Pro & iPhone 15 Pro Max",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312",
            paragraph : "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
        },
        {
            name : "New",
            heading : "iPhone 15 & iPhone 15 Plus",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290559",
            paragraph : "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 14 & iPhone 14 Plus",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654",
            paragraph : "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 15 Pro & iPhone 15 Pro Max",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312",
            paragraph : "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 15 Pro & iPhone 15 Pro Max",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312",
            paragraph : "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 15 Pro & iPhone 15 Pro Max",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312",
            paragraph : "From $999 or $41.62/mo.per month for 24 mo.monthsFootnote*"
        }])
  return (
    <>
    <div className='navbar'>
        <div className='navbar1'>
            <p><i class="fa-brands fa-apple fa-xl" style={{color: "rgb(173, 169, 169)"}}></i></p>
            <p>Store</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>Vision</p>
            <p>AirPods</p>
            <p>Tv & Home</p>
            <p>Entertainment</p>
            <p>Accessories</p>
            <p>Support</p>
            <p><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "rgb(173, 169, 169)"}}></i></p>
            <p><i class="fa-solid fa-bag-shopping fa-xl" style={{color: "rgb(173, 169, 169)"}}></i></p>
        </div>
        </div>
               

    <div>{section?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", backgroundColor: "#F5F5F7" }}>
    {section.map((pro) => (
        <div style={{  width: "30%", height: "550px", marginBottom: "50px", borderRadius:"20px", backgroundColor: "white", marginTop: "50px" }}>
            <p style={{textAlign: "left", marginLeft: "20px"}}>{pro.name}</p>
            <h1 style={{textAlign: "left", marginLeft: "20px"}}>{pro.heading}</h1>
            <img style={{ width: "80%", height: "250px", paddingTop: "20px" }} src={pro.image} />
            <h5 style={{fontSize: "18px"}}>{pro.paragraph}</h5>
        </div>
    ))}
</div> : <div>Loading...</div>}</div>
</>
  )
}

export default Shophone


