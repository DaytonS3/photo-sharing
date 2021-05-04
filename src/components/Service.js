
import "./service.css"
import JsonData from '../data/data.json'
import React from 'react'


class Service extends React.Component {
constructor(props){
    super(props)
    this.state = {
        card: false,
        cardId: "Social Media Optimization",
        cardIcon: null,
        cardText: "Through years of experience on social media, whether for personal or business reasons, we have pinpointed the unique ways to grow a following using proven algorithms to hit the high traffic times for YOUR social media accounts. We want to help YOU engage in YOUR followers, so they do the same with YOU! We not only run your social media accounts, but we also turn YOUR socials into a viable and necessary part of your business. From finely tuned, and fully customizable marketing campaigns to increase online sales, to creative event roll outs to increase foot traffic, Social Art has the social media know-how to help bolster any business’s digital footprint through Social Media.",
        back: true
    }
}


handleClick = (id, icon, text) => {
    console.log("CLICKKKKK", id)
    // this.props.history.push("/services/1")
    this.setState({
        card: !this.state.card,
        cardId: id,
        cardIcon: icon,
        cardText: text
    })
}

handleBack = () => {
    console.log("CLICKKKKK", this.props)
    this.props.history.push("/")
    // this.setState({
    //     card: !this.state.card
    // })
}

handleBack2 = () => {
    this.setState({
        card: !this.state.card,
        
    })
}

handleBack3 = () => {
    this.setState({
        back: !this.state.back,
        
    })
}



render(){
    return (
    <header onClick={this.handleBack2} id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div  className='container'>
            
            <div  className='row' style={{overflow: "hidden"}}>
                {this.state.card === false ? 
                <div>
               <p style={{width: "70",cursor:"pointer", position: "absolute", zIndex:"1001", border: "2px solid white", borderRadius: "5px", fontFamily: "commisioner", marginTop: "10px", padding: "2px"}} onClick={this.handleBack}>BACK</p> 
            
            <div className='col-md-8 col-md-offset-2 intro-text' style={{height: "100vh", width: "100%", margin: "0"}}>
                
            <div style={{fontSize: "30px", color: "white", marginTop: "10%"}}>
                <p style={{fontFamily: "commissioner", fontWeight: "Bold", fontSize: "40px", letterSpacing: "10px"}}>Social Art At Your Service</p>
                <p style={{fontFamily: "commissioner",  fontSize: "20px", letterSpacing: "6px"}}>Discover how WE can we can take your company to the next level</p>
                <div className="serviceContainer">
                {JsonData.Services
                ? JsonData.Services.map((d, i) => (
                    <div key={`${d.name}-${i}`} className='card' onClick={() => this.handleClick(d.name, d.icon, d.text)}>
                    {' '}
                    <i className={d.icon}></i>
                    <div className='service-desc'>
                        <h3 style={{color: "white", fontFamily: 'Commissioner'}}>{d.name}</h3>
                        
                    </div>
                    </div>
                ))
                : 'loading'}
                </div>
            </div>
            
            </div>
            </div>
            : <div className='col-md-8 col-md-offset-2 intro-text' style={{height: "100vh", width: "100%", }}>
               <div style={{background: "rgba(0, 0, 0, 0.5)", height: "70vh", width: "800px", borderRadius: "20px", textAlign: "left", padding: "20px"}}>
               
               {this.state.cardId ? 
               <div>
                    <p>{this.state.cardId}</p>
                    <p>{this.state.cardText}</p>
                </div>
               
               : <p>no</p>}
               </div>
            </div>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
  
}

export default Service