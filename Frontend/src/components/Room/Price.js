import React, { Component } from 'react'
import axios from 'axios'

export default class RoomBooking extends Component {
  constructor(props){
    super(props);  
  
  this.state = {
    posts:[],
  };
  }

  componentDidMount(){
    this.retrievePosts();
  }



  retrievePosts(){
    axios.get("http://localhost:4005/RoomsPrice/rooms").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts[0].Delux_Price)
      }
    })
  }

render() {
  // const firstItem = posts[0][0];
  const { posts } = this.state;

    return (
     
    <div>   
      {}
    <form>
      <label htmlFor="type">Select Room type</label>
          <select id="type" name="Rooms">
              <option value="Deluxe">Deluxe</option>
              <option value="Premier ocean">Premier ocean</option>
              <option value="Premier ocean suite">Premier ocean suite</option>
              <option value="Speciality">Speciality</option>
              <option value="Two Deluxe Room Connecting">Two Deluxe Room Connecting</option>
              <option value="Two Premier Ocean Rooms Connectin">Two Premier Ocean Rooms Connecting</option>
          </select>
          <button >button</button>
  </form>
  </div>
    )
  }
}

