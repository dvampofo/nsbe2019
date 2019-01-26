import React, { Component } from "react";
import { List, Label, Button } from 'semantic-ui-react'
import "./hiringStyle.css";

class Hiring extends Component {
  mockApplicants = [
    {
      name: 'Drew Warkentin',
      email: 'drwedulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo - Bachelor of Science',
      experience: [
        {
          length: '2 years',
          name: 'Think Research',
          position: 'App Developer'
        },
        {
          length: '6 months',
          name: 'Sportsnet',
          position: 'Web Developer'
        },
      ],
      resume: 'filename.pdf',
      skills: ['Java', 'React', 'Juggling']
    },
    {
      name: 'Drew Warkentin',
      email: 'drwedulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo',
      resume: 'pdf'
    },
    {
      name: 'Drew Warkentin',
      email: 'drwedulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo',
      resume: 'pdf'
    },
    {
      name: 'Drew Warkentin',
      email: 'drwedulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo',
      resume: 'pdf'
    },
    {
      name: 'Drew Warkentin',
      email: 'drwedulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo',
      resume: 'pdf'
    },
    {
      name: 'Drew Warkentin',
      email: 'drwedulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo',
      resume: 'pdf'
    }
  ]


  render() {
    return (
      <div className='container'>
      <div className='applicantContainer'>
      <h1>Applicants</h1>
        <List divided relaxed>
            {this.mockApplicants.map((applicant, index) => {
              return (
                <List.Item>
                  <List.Content>
                    <List.Header as='a'>Applicant #{index+1}</List.Header>
                    { applicant.education && 
                      <div className='contentContainer'>
                      <List.Description><b>Education: </b></List.Description>
                      <List.Description>{applicant.education}</List.Description>
                      </div>
                    }
                    { applicant.experience && 
                      <div className='contentContainer'>
                        <List.Description as='a'><b>Experience:</b> </List.Description>
                      {applicant.experience.map((experience) => <List.Description>{experience.name} - {experience.length} - {experience.position}</List.Description> )}
                      </div>
                    }
                    { applicant.skills &&
                      <div className='contentContainer'>
                        <List.Description as='a'>
                          <b>Skills: </b>
                          {applicant.skills.map((skill) => <Label>{skill}</Label>)}
                        </List.Description>
                      </div>
                    }
                  </List.Content>
                  <Button className='shortlistButton' primary>Shortlist</Button>
                  <Button className='shortlistButton' secondary>View Resume</Button>
                </List.Item>
              )
            })}
        </List>
      </div>


      </div>

    )
  }
}

export default Hiring;
