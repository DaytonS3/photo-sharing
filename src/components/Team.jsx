export const Team = (props) => {
  return (
    <div style={{textAlign: "center", marginBottom: "40px", color: "black", background: "#f6f6f6", padding: "100px"}}>
    <div className='section-title'>
          <h2>Meet The Team</h2>
          
        </div>
      <div className="teamContainer" style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: 'center',
        width: "70vw",
        margin: "0 auto",
        boxShadow: "0 10px 15px 0 rgba(0,0,0,0.2)",
        borderRadius: "10px",
        transition: "0.3s",
      }}>
        
        <div className="riley" style={{
          // height: "400px",
          // boxShadow: "0 6px 10px 0 rgba(0,0,0,0.2)",
          // borderRadius: "10px",
          // transition: "0.3s",
          width: "45%",
          textAlign: "center",
          padding: "50px"
        }}>
            <img src="img/social/riley.jpg" height="200px" width="200px" style={{borderRadius: "5px"}}/>
            <h1 style={{fontFamily: 'Commissioner', color: "black", fontWeight: "bold"}}>Riley Roberts</h1>
            <div style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}>
            <p style={{
              width: "50%",
              fontFamily: 'Commissioner',
              
            }}>Social Art was founded by Riley Roberts in 2020.
            Mr. Roberts got involved with the art world right after college when looking for an industry that fit his eye for quality and innovation. 
            At just the age of twenty, he went on to become one of the top art salesmen
            in the country working for one of the most renowned modern monochromatic photorealists in the world.
            His love for art and people would go on to expand into a complete remodeling of his home art gallery’s
            social media presence. Within weeks of Mr. Roberts being at the wheel, his home gallery would go on to grow their annual revenue exponentially. Over the years, he fine-tuned his
            </p>
            <p style={{
              width: "50%",
              fontFamily: 'Commissioner',
              
            }}>
              approach to getting art out
              onto social media and now he wants to share his gift with the world.<div><p> </p></div>  Mr. Roberts started his company
                and within months of setting up shop, Social Art has several clients and even partnered affiliates.
                Art is about creativity with different mediums, and Mr. Roberts’ chosen medium is social connections, 
                it is all about the people for him. Despite all his immediate success, the founder and CEO of Social Art
                  sets his eyes on the horizon and looks to the future with great ambition for more.
            </p> 
            </div>
            
        </div>
        <div className="riley" style={{
          // boxShadow: "0 6px 10px 0 rgba(0,0,0,0.2)",
          // borderRadius: "10px",
          // transition: "0.3s",
          width: "45%",
          textAlign: "center",
          padding: "50px"
        }}>
            <img src="img/social/das.jpg" height="200px" width="200px" style={{borderRadius: "5px"}}/>
            <h1 style={{fontFamily: 'Commissioner', color: "black", fontWeight: "bold"}}>Dayton Steinmeyer</h1>
            <div style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}>
            <p style={{
              fontFamily: 'Commissioner',
              width: "50%",
              
            }}>
              Shortly after the inception of Social Art, we realized the needs of the everyday Art Gallery
            and business were much more than just a strong social media presence. Businesses need websites,
              SEO’s, inventory keeping systems, CRM’s, and lead generation.  This prompted Mr. Roberts to call
              a lifelong friend, Dayton Steinmeyer. Mr. Steinmeyer had just recently graduated from the Lambda
                School and was working as a full stack software engineer for Florida Blue. Searching for more 
                out of life,
            </p>
            <p style={{
              fontFamily: 'Commissioner',
              width: "50%",
              
            }}>
              Mr. Steinmeyer was ecstatic to join the Social Art team. He is now able to follow
                  his true passion of skydiving and scuba diving! He has fully reworked Social Art’s business
                  model to now offer a variety of services including: Web Design, SEO’s, and organic lead
                    generation for subscribers to Social Art. Mr. Steinmeyer brings a new level of services
                    to Social Art that will provide a much needed overhaul to bring the Art Industry into
                      the modern era of business.
            </p> 
            </div>
            
        </div>
        {/* <div className="riley">
            <img src="img/social/das.jpg" height="200px" width="200px"/>
            <h1>Dayton Steinmeyer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias omnis quasi recusandae minus. Quam ipsa quod explicabo hic, id iste perspiciatis magnam ut distinctio dolore, error, consectetur enim illo! Sit!</p>
        </div> */}
        
        
      </div>
    </div>
  )
}
