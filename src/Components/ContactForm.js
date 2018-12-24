import React, { Component } from 'react';
import { Form, Button, Segment, Grid } from 'semantic-ui-react';
import FormStyles from './Styles/FormStyles';

class ContactForm extends Component {
  state = { email: '' };

  render() {
    return (
      <FormStyles>
        <Grid.Column>
          <Segment inverted>
            <Form inverted stackable>
              <h2>Contact Us Today</h2>
              <p>
                Send us a quick message to and we'll get back to you as soon as possible about creating your next dream
                project.
              </p>
              <Form.Group>
                <Form.Field width={8}>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Enter Name" />
                </Form.Field>
                <Form.Field width={8}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="Enter Email" />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field width={16}>
                  <Form.TextArea label="Message" placeholder="Write a message telling us what you are looking for." />
                </Form.Field>
              </Form.Group>
              <Button type="submit" inverted color="orange">
                Contact Us
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </FormStyles>
    );
  }
}

export default ContactForm;
