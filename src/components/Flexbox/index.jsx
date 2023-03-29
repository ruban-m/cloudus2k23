import React from 'react'
import Card from '../Card'
import img1 from '../../assets/images/14979256_SL_060521_43530_27.jpg'
import Timing from '../Timing'
import Break from '../Break'
import lunchLottie from '../../assets/Lottie/prepare-food.json'
import priceLottie from '../../assets/Lottie/trophy.json'
import coffeeLottie from '../../assets/Lottie/coffee-love.json'

//technical
import t1 from '../../assets/svg/solution-sprint.svg'
import ctf from '../../assets/svg/ctf.svg'
import debugDrift from '../../assets/svg/debug-drift.svg'
import markupMayhem from '../../assets/svg/markup-mayhem.svg'

// non technical
import talentFest from '../../assets/svg/talent-fest.svg'
import ipl from '../../assets/svg/ipl.svg'
import reelTunes from '../../assets/svg/reel-tunes.svg'
import fnf from '../../assets/svg/fnf.svg'

const Flexbox = () => {
  return (
    <React.Fragment>
      <Break start='Coffee' end='Break' lottieData={coffeeLottie} />
      <div className='row p-4 m-0'>
        <div className='col-12 col-md-5'>
          <Card
            img={t1}
            title='Solution Sprint:'
            subtitle='(Technical Event)'
            description='The Solution Sprint involves presenting a solution to a problem statement, They have the freedom to select any problem statement and devise a solution for it'
          />
        </div>
        <div className='col-12 col-md-2'>
          <Timing startTime='10:00 AM' endTime='11:00 AM' />
        </div>
        <div className='col-12 col-md-5'>
          <Card
            img={talentFest}
            title='Talent Fest:'
            subtitle='(Non Technical Event)'
            description='In Talent Fest, Participants need to exhibit their skills and abilities in a particular category (Categories are listed below)'
          />
        </div>
      </div>
      <div className='row p-4 m-0'>
        <div className='col-12 col-md-5'>
          <Card
            img={ctf}
            title='Cyber Siege:'
            subtitle='(Technical Event)'
            description='Cyber Siege is a Capture The Flag event that contains 10 challenges in the category of Web, Crypto, Reversing, Forensics & OSINT
            '
          />
        </div>
        <div className='col-12 col-md-2'>
          <Timing startTime='11:00 AM' endTime='12:00 PM' />
        </div>
        <div className='col-12 col-md-5'>
          <Card
            img={reelTunes}
            title='Reel Tunes:'
            subtitle='(Non Technical Event)'
            description='Reel Tunes contains 3 rounds,
            1) Guess the BGM, 
            2) Find the movie name with the given images, 
            3) Find the missing lyrics in the song.'
          />
        </div>
      </div>
      <div className='row p-4 m-0'>
        <div className='col-12 col-md-5'>
          <Card
            img={debugDrift}
            title='Debug Drift:'
            subtitle='(Technical Event)'
            description='Debug Drift is code debugging event that contains few programming challenges'
          />
        </div>
        <div className='col-12 col-md-2'>
          <Timing startTime='12:00 PM' endTime='01:00 PM' />
        </div>
        <div className='col-12 col-md-5'>
          <Card
            img={ipl}
            title='IPL Blitz:'
            subtitle='(Non Technical Event)'
            description='IPL Blitz contains 2 or 3 rounds, In the first two rounds participants need to answer the questions thats related to IPL., In the Final round they are sorted out to 4 individual teams for the IPL Auction'
          />
        </div>
      </div>
      <Break start='Lunch' end='Break' lottieData={lunchLottie} />
      <div className='row p-4 m-0'>
        <div className='col-12 col-md-5'>
          <Card
            img={markupMayhem}
            title='Markup Mayhem:'
            subtitle='(Technical Event)'
            description='Markup Mayhem is a HTML & CSS battle event, Participants need to style the given design accurately using HTML & CSS'
          />
        </div>
        <div className='col-12 col-md-2'>
          <Timing startTime='02:00 PM' endTime='03:00 PM' />
        </div>
        <div className='col-12 col-md-5'>
          <Card
            img={fnf}
            title='Fast n Frolic:'
            subtitle='(Non Technical Event)'
            description='Fast n Frolic is an adventure-themed event that involves several fun games that require physical activity'
          />
        </div>
      </div>
      <Break start='Prize' end='Distribution' lottieData={priceLottie} />
    </React.Fragment>
  )
}
export default Flexbox
