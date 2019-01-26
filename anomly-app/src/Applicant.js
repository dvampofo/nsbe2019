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

  onSubmit = () => {
    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      education: "",
      resumeDrop: "",
      length: "",
      company: "",
      job: "",
      coverLetter: "",
      skills: ""
    });
    alert('Thanks for submitting!')
  };

  render() {
    return (
      <div>
        <Form className="formContainer">
          <Form.Group widths="equal" className="formMargin">
            <Form.Input
              fluid
              value={this.state.firstName}
              label="First name"
              placeholder="First name"
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
            <Form.Input
              fluid
              value={this.state.lastName}
              label="Last name"
              placeholder="Last name"
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />

            <Form.Input
              fluid
              value={this.state.gender}
              label="Gender"
              options={options}
              placeholder="Gender"
              onChange={event => this.setState({ gender: event.target.value })}
            />
            <br />
            <br />
          </Form.Group>
          <Form.Group widths="equal" className="formMargin">
            <Form.Input
              fluid
              value={this.state.phone}
              label="Phone"
              placeholder="Phone number"
              onChange={event => this.setState({ phone: event.target.value })}
            />
            <Form.Input
              fluid
              value={this.state.education}
              label="Education"
              placeholder="Education"
              onChange={event =>
                this.setState({ education: event.target.value })
              }
            />
          </Form.Group>
          <div className="dropContainer">
            <ResumeDrop value={this.state.resumeDrop} />
          </div>
          <h2>Experience</h2>
          <Form.Group widths="equal" className="formMargin">
            <Form.Input
              fluid
              value={this.state.company}
              label="Company name"
              placeholder="company name"
              onChange={event => this.setState({ company: event.target.value })}
            />
            <Form.Input
              fluid
              value={this.state.length}
              label="Length"
              placeholder="Length"
              onChange={event => this.setState({ length: event.target.value })}
            />
            <Form.Input
              fluid
              value={this.state.job}
              label="Job position"
              placeholder="Job position"
              onChange={event => this.setState({ job: event.target.value })}
            />
          </Form.Group>

          <Form.TextArea
            value={this.state.coverLetter}
            label="Optional (Cover Letter)"
            placeholder="Tell us more about you..."
            className="formMargin"
            onChange={event =>
              this.setState({ coverLetter: event.target.value })
            }
          />

          <Form.Group widths="equal" className="formMargin">
            <Form.Input
              fluid
              value={this.state.skills}
              label="Skills"
              placeholder="Skill"
              onChange={event => this.setState({ skills: event.target.value })}
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <button onClick={this.onSubmit} className="submitButton">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default Hiring;
