import React from 'react';

//reduxForm is a func that has same functionality as connect function from react redux library, make sure
//we can call some action creator and get some form data into our component.
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({error,touched}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //remember to destructure props
  renderInput = ({input, label, meta }) =>{
    // console.log(formProps)
    //show error
    // console.log(meta.error);
    const className= `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues){
      console.log(formValues);
  }

  render(){
    // console.log(this.props);

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//validate form
const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    //only run if user did not enter a Title
    errors.title = 'You must enter a title';
  }
  if(!formValues.description){
    errors.description = "You must enter a description";
  }
  return errors;
}

export default reduxForm({
  form: 'STREAM_CREATE',
  validate: validate
})(StreamCreate);
