import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: "",
    email: "",
    contact_number: "",
    subject: "",
    message: ""
  }

  this.submitForm = this.submitForm.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name
    this.setState({[name]: e.target.value})
  }

  submitForm(e){
    e.preventDefault();
    let reqBody = {first_name: this.state.first_name.trim(),
      email: this.state.email.trim(),
      contact_number: this.state.contact_number.trim(),
      subject: this.state.subject.trim(),
      message: this.state.message.trim()
    };
      fetch('http://localhost:3000/api/v1/contacts.json', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(reqBody)
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} ($response.statusText)`,
              error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(response => {console.log(response.json)})
        .catch(error => console.error(`Error in fetch: ${error.message}`))
        this.props.history.push('/Submitted')
      }

  render() {
      return (
        <div className="center-container">
            <div className="center-item contact">
              <div className="div-shadow contact-div">
                <h1>For any inquiries or orders please contact us:</h1>
              </div>
              <div className="form-div div-shadow">
                <form className="contact-form" onSubmit={this.submitForm}>
                <div className="contact-top">
                  <label>
                  <h2>Name: </h2>
                    <input type="text" name='name' className="inset-shadow" value={ this.state.name } onChange={ this.handleChange }/>
                  </label>
                  <label>
                  <h2>Email: </h2>
                    <input type="text" name='email' className="inset-shadow" value={ this.state.email } onChange={ this.handleChange } />
                  </label>
                </div>
                <div>
                  <label>
                  <h2>Contact Phone: </h2>
                    <input type="text" name='contact_number' className="inset-shadow" value={ this.state.contact_number } onChange={ this.handleChange } />
                  </label>
                  <label>
                  <h2>Subject: </h2>
                    <input type="text" name='subject' className="inset-shadow" value={ this.state.subject } onChange={ this.handleChange } />
                  </label>
                </div>
                <div>
                  <label>
                  <h2>Message: </h2>
                    <textarea name='message' className="inset-shadow" value={ this.state.message } onChange={ this.handleChange } />
                  </label>
                </div>
                <div className="contact-bottom">
                  <input type="submit" value="Submit" className="button"/>
                </div>
                </form>
              </div>
            </div>
        </div>
      )
  }
}

export default Contact;
