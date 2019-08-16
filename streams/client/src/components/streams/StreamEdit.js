import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

//refactor to class based component
class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  render(){
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    return(
      <div>{this.props.stream.title}</div>
    );
  }
}
// const StreamEdit = (props) => {
//   return <div>StreamEdit</div>;
// };


//ownProps second argument is ref to props object that shows inside the stream edit componnet
const mapStateToProps = (state,ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]};
}

export default connect (mapStateToProps,{fetchStream})(StreamEdit);
