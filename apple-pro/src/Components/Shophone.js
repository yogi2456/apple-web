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
            paragraph : "From $799 or $33.29/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 14 & iPhone 14 Plus",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654",
            paragraph : "From $699 or $29.12/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 13",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1692912410963",
            paragraph : "From $599 or $24.59/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone SE",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646415838921",
            paragraph : "From $499 or $17.87/mo.per month for 24 mo.monthsFootnote*"
        },{
            name : "New",
            heading : "iPhone 15 Pro & iPhone 15 Pro Max",
            image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4Q3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1693594240142",
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

        <div className='shop'>
        <div className='shop1'>
          <p>Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.</p>
        </div>
      </div>
      

      <div className='shop2'>
      <div className='shop3'>
          <div className='shop4'>
            <h1>Shop iPhone</h1>
          </div>
          <div>
            <div className='shop5'>
              <div>
                <img  style={{width: "100%", height: "100%"}} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202305_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928825'/>
              </div>
              <div>
                <p>Need shopping help?</p>
                <p>Ask a specialist</p>
              </div>
            </div>
            <div className='shop6'>
              <div>
                <i class="fa-brands fa-apple fa-xl" style={{color: "#black"}}></i>
              </div>
              <div>
                <p>Visit an Apple Store</p>
                <p>Find one near you</p>
              </div>
            </div>
          </div>
        </div>
        </div>
               

    {/* <div>{section?.length ? */}
     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", backgroundColor: "#F5F5F7" }}>
    {section.map((pro) => (
        <div style={{  width: "30%", height: "550px", marginBottom: "50px", borderRadius:"20px", backgroundColor: "white", marginTop: "30px" }}>
            <p style={{textAlign: "left", marginLeft: "20px"}}>{pro.name}</p>
            <h1 style={{textAlign: "left", marginLeft: "20px"}}>{pro.heading}</h1>
            <img style={{ width: "80%", height: "250px", paddingTop: "20px" }} src={pro.image} />
            <h5 style={{fontSize: "18px"}}>{pro.paragraph}</h5>
        </div>
    ))}
</div> 
{/* : <div>Loading...</div>}</div> */}


<div className='footer'>
            <div className='footer1'>
                <p className='footer2'>
                1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
                </p>
                <p>
Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission. This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained</p>
                <p>Apple Vision Pro will be available early next year on apple.com and at Apple retail stores in the U.S.</p>
                <p>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                <p>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</p>
            </div>

            <div className='footer3'>
                <div></div>
            </div>

            <div className='footer4'>
                <div className='footer5'>
                    <div>
                        <h3>Shop and Learn</h3>
                        <p>Store</p>
                        <p>Mac</p>
                        <p>iPad</p>
                        <p>iPhone</p>
                        <p>Watch</p>
                        <p>Vision</p>
                        <p>AirPods</p>
                        <p>TV & Home</p>
                        <p>Air Tag</p>
                        <p>Accessories</p>
                        <p>Gift Cards</p>
                        <h2>Apple Wallet</h2>
                        <p>Wallet</p>
                        <p>Apple Card</p>
                        <p>Apple Pay</p>
                        <p>Apple Cash</p>
                    </div>
                    <div>
                        <h3>Account</h3>
                        <p>Manage Your Apple ID</p>
                        <p>Apple Store Account</p>
                        <p>iCloud.com</p>
                        <h2>Entertainment</h2>
                        <p>Apple One</p>
                        <p>Apple TV+</p>
                        <p>Apple Music</p>
                        <p>Apple Arcade</p>
                        <p>Apple Fitness+</p>
                        <p>Apple News+</p>
                        <p>Apple Podcasts</p>
                        <p>Apple Books</p>
                        <p>App Store</p>
                    </div>
                    <div>
                        <h3>Apple Store</h3>
                        <p>Find a Store</p>
                        <p>Genius Bar</p>
                        <p>Today at Apple</p>
                        <p>Apple Camp</p>
                        <p>Apple Store App</p>.
                        <p>Certified Refurbished</p>
                        <p>Apple Trade In</p>
                        <p>Financing</p>
                        <p>Carrier Deals at Apple</p>
                        <p>Order Status</p>
                        <p>Shopping Help</p>
                    </div>
                    <div>
                        <h3>For Business</h3>
                        <p>Apple and Business</p>
                        <p>Shop for Business</p>
                        <h2>For Education</h2>
                        <p>Apple and Education</p>
                        <p>Shop for K-12</p>
                        <p>Shop for College</p>
                        <h2>For Healthcare</h2>
                        <p>Apple in Healthcare</p>
                        <p>Health on Apple Watch</p>
                        <p>Health Records on iPhone</p>
                        <h2>For Government</h2>
                        <p>Shop for Government</p>
                        <p>Shop for Veterans and Military</p>
                    </div>
                    <div>
                        <h3>Apple Values</h3>
                        <p>Accessebility</p>
                        <p>Environment</p>
                        <p>Inclusion and Diversity</p>
                        <p>Education</p>
                        <p>Privacy</p>
                        <p>Racial Equity and Justice</p>
                        <p>Supplier Responsibility</p>
                        <h2>About Apple</h2>
                        <p>Newsroom</p>
                        <p>Apple Leadership</p>
                        <p>Career Opportunities</p>
                        <p>Investors</p>
                        <p>Ethics & Compliance</p>
                        <p>Events</p>
                        <p>Contact Apple</p>
                    </div>
                </div>
            </div>
        </div>
</>
  )
}

export default Shophone


