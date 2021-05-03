import {Par} from '../components/particles'
import "./service.css"
import JsonData from '../data/data.json'
import React from 'react'
import ServicePop from './ServicePop'

class Service extends React.Component {
constructor(props){
    super(props)
    this.state = {
        card: false,
        cardId: null,
        cardIcon: null,
        cardText: null
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



render(){
    return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            
            <div className='row' >
            {this.state.card === false ? 
            <div className='col-md-8 col-md-offset-2 intro-text' style={{height: "100vh"}}>
                <p style={{cursor:"pointer"}} onClick={this.handleBack}>BACK</p>
            <div style={{fontSize: "30px", color: "white"}}>
                <p>Our Services</p>
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
            : <div className='col-md-8 col-md-offset-2 intro-text' style={{height: "100vh", width: "100%"}}>
               <div style={{background: "black", opacity: "0.5", height: "70vh", width: "800px", borderRadius: "20px", textAlign: "left", padding: "20px"}}>
               <p style={{cursor: "pointer"}} onClick={this.handleBack2}>BACK</p>
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