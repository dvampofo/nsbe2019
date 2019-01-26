import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import "./style.css";
import ResumeDrop from "./ResumeDrop";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "nb", text: "Decline to say", value: "Decline to say" }
];

class Hiring extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form className="formContainer">
          <Form.Group widths="equal" className="formMargin">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />

            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
            <br />
            <br />
          </Form.Group>
          <Form.Group widths="equal" className="formMargin">
            <Form.Input fluid label="Phone" placeholder="Phone number" />
            <Form.Input fluid label="Education" placeholder="Education" />
          </Form.Group>
          <div className="dropContainer">
            <ResumeDrop />
          </div>
          <h2>Experience</h2>
          <Form.Group widths="equal" className="formMargin">
            <Form.Input fluid label="Company name" placeholder="company name" />
            <Form.Input fluid label="Length" placeholder="Length" />
            <Form.Input fluid label="Job position" placeholder="Job position" />
          </Form.Group>

          <Form.TextArea
            label="Optional (Cover Letter)"
            placeholder="Tell us more about you..."
            className="formMargin"
          />

          <Form.Group widths="equal" className="formMargin">
            <Form.Input fluid label="Skills" placeholder="Skill" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button className="submitButton">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default Hiring;
