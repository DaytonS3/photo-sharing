export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Testimonies</h2>
        </div>
        <div className='row' style={{
          display: "flex",
          justifyContent: "space-evenly"
          }}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4' style={{width: "45%", boxShadow: "0 6px 10px 0 rgba(0,0,0,0.2)",
                borderRadius: "10px",
                transition: "0.3s",
                width: "45%",
                textAlign: "center",
                padding: "50px"}}>
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
