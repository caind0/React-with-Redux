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

  onSubmit(formValues){
      console.log(formValues);
  }

  render(){
    // console.log(this.props);

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'STREAM_CREATE'
})(StreamCreate);
