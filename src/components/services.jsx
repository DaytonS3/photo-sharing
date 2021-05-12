export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    
                  </div>
                  
                </div>
              ))
            : 'loading'}
            <a style={{cursor: "pointer", textDecoration: "none", color: "white", border: "1px solid white", padding: "5px", borderRadius: "5px"}} href="https://artgonesocial.com/services"> View Services</a>
        </div>
        
      </div>
    </div>
  )
}
