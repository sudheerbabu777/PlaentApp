// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {name, imageUrl, description} = planetItemDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`Planet ${name}`} className="image-planet" />
      <h1 className="planet-title">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
