import React from 'react'
import Card from '../Card'
import Timing from '../Timing'

const Events = ({ object }) => {
  return (
    <div className='row p-1 p-md-4 m-0'>
      <div className='col-12 col-md-5'>
        <Card
          id={object.technicalEvent.id}
          img={object.technicalEvent.image}
          title={object.technicalEvent.title}
          subtitle={object.technicalEvent.subtitle}
          description={object.technicalEvent.description}
          rules={object.technicalEvent.rules}
          link={object.technicalEvent.link}
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
          id={object.nonTechnicalEvent.id}
          img={object.nonTechnicalEvent.image}
          title={object.nonTechnicalEvent.title}
          subtitle={object.nonTechnicalEvent.subtitle}
          description={object.nonTechnicalEvent.description}
          rules={object.nonTechnicalEvent.rules}
          link={object.nonTechnicalEvent.link}
        />
      </div>
    </div>
  )
}

export default Events
