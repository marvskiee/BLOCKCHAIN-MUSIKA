import React from 'react'

export const About = () => {

	const developers = [
		
		{
			name:"Junelvin Saceda",
			position:"Programmer",
			avatarpic: "mm1.jpg"
		},
		{
			name:"Marvi Lean Negrete",
			position:"Designer, Programmer",
			avatarpic: "mm2.jpg"
		},
		{
			name:"Prax Donor",
			position:"Programmer, Analyst",
			avatarpic:"mm3.jpg"
		}
	]
	return (
		developers && developers.map(({name,position,avatarpic},index) =>
			<div key={index} className="col-lg-4 col-md-4">
				<div className="mt-3 mb-3 text-center">
			    	<img alt="devpic" src={require(`assets/pics/${avatarpic}`)} className="icon-size rounded-circle border-warning fa fa-users developerFrame"/>
			    </div>
			    <div className="card">   
			        <div className="card-body ">
			            <p className="font-weight-bold text-center navFontSize">{name}</p>
			            <p className="text-center">{position}</p>
			        </div>
			    </div>
			</div>
		)
	)
}

