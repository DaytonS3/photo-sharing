export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Testimonies</h2>
        </div>
        <div className='row2'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='Tcard' style={{ boxShadow: "0 6px 10px 0 rgba(0,0,0,0.2)",
                borderRadius: "10px",
                transition: "0.3s",
                
                textAlign: "center",
                }}>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p style={{fontFamily: 'Commissioner', fontWeight: "bold"}}>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
