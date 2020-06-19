import React from 'react'
import 'components/Bottombar/index.css'
import {BottombarItems} from 'components/Bottombar/components/BottombarItems'

export const Bottombar = ({bottomlinks}) => {

  return (
		<div className="border-top border-warning text-light fixed-bottom customBottombar" > 
			<BottombarItems bottomlink={bottomlinks}/>
		</div>	
  )
}
