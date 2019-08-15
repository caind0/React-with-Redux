import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchStreams} from '../../actions';

// const StreamList = () => {
//   return <div>StreamList</div>;
// };
//use class bassed comp bc we to call our action creator inside compdidmount ( attempt fetch stream one tiome)
class StreamList extends React.Component {
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderCheckUser(stream){
    if(stream.userId === this.props.currentUserId){
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderList(){
      return this.props.streams.map(stream => {
        return (
            <div className="item" key={stream.id}>
              {this.renderCheckUser(stream)}
              <i className="large middle icon camera"/>
              <div className="content">
                {stream.title}
                <div className="description">{stream.description}</div>
              </div>
            </div>
        );
      });
  }

  renderCreate(){
    //check if user is signed in
    if(this.props.isSignedin){
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render(){
    //console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //turn streams object into an array into our component
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedin: state.auth.isSignedin
  };

};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
