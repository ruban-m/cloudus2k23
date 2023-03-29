import React from 'react'
import Card from '../Card'
import Timing from '../Timing'

const Events = ({ object }) => {
  console.log(object.technicalEvent.image)
  return (
    <div className='row p-1 p-md-4 m-0'>
      <div className='col-12 col-md-5'>
        <Card
          img={object.technicalEvent.image}
          title={object.technicalEvent.title}
          subtitle={object.technicalEvent.subtitle}
          description={object.technicalEvent.description}
        />
      </div>
      <div className='col-12 col-md-2'>
        <Timing
          startTime={object.timing.startTime}
          endTime={object.timing.endTime}
        />
      </div>
      <div className='col-12 col-md-5'>
        <Card
          img={object.nonTechnicalEvent.image}
          title={object.nonTechnicalEvent.title}
          subtitle={object.nonTechnicalEvent.subtitle}
          description={object.nonTechnicalEvent.description}
        />
      </div>
    </div>
  )
}

export default Events
