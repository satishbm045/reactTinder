import React from 'react';
import './App.css';
import EachDataShow from './component/EachDataShow/EachDataShow';
import ShowReletedData from './component/ShowReletedData/ShowReletedData';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import store from './reduce/store';
import {GetUserData, UpdateLikeArray, UpdateDislikeArray} from './reduce/Action/Action'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(GetUserData())
  }
  render(){
    return (
        <BrowserRouter>
            <div className="mainApp">
              <Route path="/" exact render = {() => {return <EachDataShow userData={this.props.userData} />}} />
              <Route path="/liked" exact render = {() => {return <ShowReletedData likeData={this.props.likedUserData} />}} />
              <Route path="/disliked" exact render = {() => {return <ShowReletedData likeData={this.props.DislikedUserData} />}} />
            </div>
        </BrowserRouter>
    )
  }
}

const mapStoreToProps = (store) => {
    return {
      userData : store.userDataReducer,
      likedUserData : store.LikedDataReducer,
      DislikedUserData: store.DislikedDataReducer
    }
}
export default connect(mapStoreToProps)(App);
