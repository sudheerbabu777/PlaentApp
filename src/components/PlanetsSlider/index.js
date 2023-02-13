// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="title">Planets</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem planetItemDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
