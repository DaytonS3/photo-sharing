import { withRouter } from 'react-router-dom';
import react from "react";

class Header extends react.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    console.log('prrr', this.props)
    return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            
            <div className='row' >
            <div>
      <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          color: "white"
      }}>
        <a style={{
            fontFamily: 'Commissioner',
            textDecoration:"none",
            fontSize: "24px",
            color: "white"
        }}
        href="https://artgonesocial.com/services">Service</a>
        <a style={{
            fontFamily: 'Commissioner',
            textDecoration:"none",
            fontSize: "24px",
            color: "white"
        }}
        href="#about">About Us</a>
        <a style={{
            fontFamily: 'Commissioner',
            textDecoration:"none",
            fontSize: "24px",
            color: "white"
        }}
        href="#contact">Contact</a>  
      </div>
      
      <div className='col-md-8 col-md-offset-2 intro-text's >
                
                <img style={{
                  height: "400px",
                  width: "400px"
                }} src="img/social/Transparent Logo (1).png"/>
                <h1 style={{fontFamily: 'Commissioner'}}>
                  SOCIAL ART
                  <span></span>
                </h1>
                <p style={{fontFamily: 'Commissioner'}}>“Your Art Can Speak For Itself. Now, Let It Be Social.”</p>
                <a
                  href='#about'
                  style={{
                    fontFamily: 'Commissioner',
                    border: "1px solid white",
                    textDecoration: 'none',
                    borderRadius: "20px",
                    color: "white",
                    padding: "8px"
                  }}
                >
                  Learn More
                </a>{' '}
              </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
  }
  
}

export default withRouter(Header)