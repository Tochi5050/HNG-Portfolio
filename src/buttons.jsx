import React from 'react'
import { ButtonsList } from './ButtonsList'

export const Buttons = () => {

    const buttonsList = [
       {
        button : 'Twitter'
       },
       {
        button : 'Zuri Team'
       },
       {
        button : 'Zuri Books'
       },
       {
        button : 'Python Books'
       },
       {
        button : 'Background Check for Coders'
       },
       {
        button : 'Design Books'
       }

    ]

  return (
    <div>
     <ButtonsList buttonsList = {buttonsList}/>
    </div>
  )
}

