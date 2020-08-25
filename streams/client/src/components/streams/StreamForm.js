import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input type='text' {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <h4 className='header'>{error}</h4>
        </div>
      );
    }
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name='title'
          component={this.renderInput}
          label='Title'
          required
        />
        <Field
          name='description'
          component={this.renderInput}
          label='Description'
          required
        />
        <button className='ui button primary'>Create Stream</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You need to provide a title.';
  }

  if (!formValues.description) {
    errors.description = 'You need to provide a description.';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

