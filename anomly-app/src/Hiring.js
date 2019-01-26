import React, { Component } from "react";
import { List, Label, Button } from 'semantic-ui-react'
import "./hiringStyle.css";
import fire from './fire'

class Hiring extends Component {
  constructor(props) {
    super(props)

    this.dbref = null

    // setTimeout(() => {
    //   this.dbref = window.firebase.database().ref('/');

    //   this.dbref.on('value', (snapshot) => {
    //     console.log('data', snapshot.val())
    //     this.setState({ applicants: snapshot.val() }, console.log(this.state.data))
    //   });

    // }, 3000)



  }

  // componentDidMount() {
    // console.log('didMount')
    /* Create reference to messages in Firebase Database */
    // const dbRef = fire.database().ref('/applicants/')
    // console.log(dbRef)
    // fire.database().ref('/applicants/test/').once('value', function (dbRef) {
      
    //   console.log("hello")
    //   console.log(dbRef.val())
    // });
    // dbRef.on('value', snapshot => {
    //   console.log('yyyyy', snapshot.val())
      /* Update React state when message is added at Firebase Database */
      // let message = { text: snapshot.val(), id: snapshot.key };
      // this.setState({ messages: [message].concat(this.state.messages) });
    // })

    // var leadsRef = database.ref('leads');
    // leadsRef.on('value', function (snapshot) {
    //   snapshot.forEach(function (childSnapshot) {
    //     var childData = childSnapshot.val();
    //   });
    // });
  // }

  mockApplicants = [
    {
      name: 'Drew Warkentin',
      email: 'drewdulz@gmail.com',
      phone: '5743757543',
      education: 'University of Waterloo - Bachelor of Applied Science',
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
      name: 'David A',
      email: 'drewdulz@gmail.com',
      phone: '5743757543',
      education: 'York University - Computer Science',
      experience: [
        {
          length: '4 months',
          name: 'Google',
          position: 'Mobile Developer'
        },
        {
          length: '4 months',
          name: 'IBM',
          position: 'Watson developer'
        },
      ],
      resume: 'filename.pdf',
      skills: ['Swift', 'React', 'React Native', 'Kotlin']
    },
    {
      name: 'Ameya S',
      email: 'drewdulz@gmail.com',
      phone: '5743757543',
      education: 'Univeristy of Toronto - Computer Engineering',
      experience: [
        {
          length: '2 years',
          name: 'McAfee',
          position: 'Consultant'
        },
        {
          length: '2 years',
          name: 'Bloomberg',
          position: 'Web developer'
        },
      ],
      resume: 'filename.pdf',
      skills: ['Python', 'Angular', 'Ember', 'React', 'Flask', 'Pandas', 'Kubernetes']
    },


  ]


  _shortlist() {
    alert('Interview request sent')
  }

 


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
                  <Button className='shortlistButton' onClick={() => this._shortlist()} primary>Send interview request
                  </Button>
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
