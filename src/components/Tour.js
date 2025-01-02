const Tour = ({image, date, title, text, location, duration, amount}) => {
  return (
     <article className="tour-card">
          <div className="tour-img-container">
            <img src={image} rel="noreferrer" className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration} days</p>
              <p>from ${amount}</p>
            </div>
          </div>
        </article>
  )
}
export default Tour