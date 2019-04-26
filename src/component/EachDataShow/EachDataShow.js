import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {GetUserData, UpdateLikeArray, UpdateDislikeArray} from '../../reduce/Action/Action'
import '../ShowReletedData/ShowReletedData.css'

class EachDataShow extends React.Component{
	constructor(props){
		super(props);
	}
	callingDispatchfn(){
		this.props.dispatch(GetUserData())
	}
	AddedToLike = () =>{
		this.props.dispatch(UpdateLikeArray(this.props.userData.posts.results[0]));
		this.callingDispatchfn()
	}
	AddedToDislike = () =>{
		this.props.dispatch(UpdateDislikeArray(this.props.userData.posts.results[0]));
		this.callingDispatchfn()
	}
	render(){
	    return (
	    	<div>
		    	{
					this.props.userData.loading && <div className="loadingIcon"><img src="https://img.icons8.com/color/48/000000/loading.png"/></div>

				}
				{
					this.props.userData.error && <div>Oops not working currently</div>

				}
				{
					!this.props.userData.loading && this.props.userData.posts && 
					<div className="user"> 
						<div className="ppic">
							<img src={this.props.userData.posts.results[0].picture.large}/>
						</div>
						<div className="name"> 
							Name: {this.props.userData.posts.results[0].name.title}. {this.props.userData.posts.results[0].name.first }  {this.props.userData.posts.results[0].name.last }
						</div>
						<div className="name">
							Age: {this.props.userData.posts.results[0].dob.age} 
						</div>
						<div className="actionButton">
							<div onClick={this.AddedToLike} className="likeButton">&hearts;</div>
							<div onClick={this.AddedToDislike} className="dislikeButton">X</div>
						</div>	
					</div>

				}
				<div>
					<Link to="/liked">Go To like</Link>
					<Link to="/disliked">Go To dislike</Link>
				</div>
	    	</div>
	    )
	}
}

export default connect()(EachDataShow);