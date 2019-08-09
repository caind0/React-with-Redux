import React from 'react';

//reduxForm is a func that has same functionality as connect function from react redux library, make sure
//we can call some action creator and get some form data into our component.
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  //remember to destructure props
  renderInput({input, label }){
    // console.log(formProps)
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render(){
    return (
      <form className="ui form">
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'STREAM_CREATE'
})(StreamCreate);
