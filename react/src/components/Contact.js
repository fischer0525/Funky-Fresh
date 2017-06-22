import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
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
      last_name: this.state.last_name.trim(),
      email: this.state.email.trim(),
      contact_number: this.state.contact_number.trim(),
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
            <div className="center-item">
            <div className="container">
              <form onSubmit={this.submitForm}>
                <input type="text" name='first_name' value={ this.state.first_name } onChange={ this.handleChange }/>
                <input type="text" name='last_name' value={ this.state.last_name } onChange={ this.handleChange } />
                <input type="text" name='email' value={ this.state.email } onChange={ this.handleChange } />
                <input type="text" name='contact_number' value={ this.state.contact_number } onChange={ this.handleChange } />
                <input type="text" name='message' value={ this.state.message } onChange={ this.handleChange } />
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default Contact;
