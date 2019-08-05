import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render(){
    //this.props = { songs: state.songs }
    console.log(this.props);
    return <div>Song List</div>;
  }
};

//get my state
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
