import React, { Component } from 'react';

class UserForm extends Component {
  formRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(this.formRef.current);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    this.props.onSubmit(formDataObject);
  };

  render() {
    return (
      <form ref={this.formRef} className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input className="form-input" type="checkbox" id="student" name="student" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input" id="occupation">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="about">
            About
          </label>
          <textarea name="about" className="form-input" id="about" />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
