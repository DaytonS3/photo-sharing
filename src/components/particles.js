import Particles from "react-tsparticles";
import react from 'react'

export class Par extends react.Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

 

  render() {
    return (
        <div>
      {/* <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        width="100%"
        height="100vh"
        options={{
            fpsLimit: 100,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  sides: 5
                },
                
              },
              opacity: {
                value: 0.1,
                random: false,
                animation: {
                  enable: false,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              size: {
                value: 10,
                random: { enable: true, minimumValue: 5 },
                animation: {
                  enable: false,
                  speed: 40,
                  minimumValue: 5,
                  sync: false
                }
              },
              lineLinked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                collisions: true,
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: false,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10
                  }
                },
                onClick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            detectRetina: true,
            background: {
              color: "transparent",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            }
            
        }}
      /> */}
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
        href="http://localhost:3000/services">Services
        </a>
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
    );
    
  }
}