import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import FormStyles from './Styles/FormStyles';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
    e.preventDefault();
    this.setState({ email: '', name: '', message: '' });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <FormStyles>
        <Segment inverted>
          <Form inverted stackable onSubmit={this.handleSubmit}>
            <h2>Contact Us Today</h2>
            <p>
              Send us a quick message to and we'll get back to you as soon as possible about creating your next dream
              project.
            </p>
            <Form.Group>
              <Form.Field width={8}>
                <label id="name" htmlFor="name">
                  Name
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                  />
                </label>
              </Form.Field>
              <Form.Field width={8}>
                <label htmlFor="email">
                  Email Address
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                  />
                </label>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={16}>
                <Form.TextArea
                  label="Message"
                  id="message"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Write a message telling us what you are looking for."
                />
              </Form.Field>
            </Form.Group>
            <Button type="submit" inverted color="orange">
              Send
            </Button>
          </Form>
        </Segment>
      </FormStyles>
    );
  }
}

export default ContactForm;
