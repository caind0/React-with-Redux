import _ from 'lodash';
import React from 'react';

import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

//refactor to class based component
class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render(){
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    return(
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title','description')}
          onSubmit={this.onSubmit}
        />
      </div>
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

export default connect (mapStateToProps,{fetchStream,editStream})(StreamEdit);
