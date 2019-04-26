import React from 'react';
import './ShowReletedData.css'

const ShowReletedData = (props) =>{
	console.log(props.likeData);
	return(

			<div>
				{props.likeData.map((e, i) =>{
					return <div key={i}>
						<div className="ppic">
							<img src={e.picture.large}/>
						</div>
						<div> 
							Name: {e.name.title}. {e.name.first }  {e.name.last }
						</div>
						<div>
							Age: {e.dob.age} 
						</div>
					</div>
				})}
			</div>
		)
}

export default ShowReletedData;