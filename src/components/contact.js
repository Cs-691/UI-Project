import React from 'react';
import {Grid, Segment, Header, Container, Form, Input, TextArea, Button, Icon, Image} from 'semantic-ui-react';
import location from '../Assets/images/location.png'
import email from '../Assets/images/email.png'
import phone from '../Assets/images/mobile.png'
import facebook from '../Assets/images/fb.png'
import instagram from '../Assets/images/insta.png'
import twitter from '../Assets/images/twitter.png'


class contact extends React.Component{

  render(){
    return(
      <Grid>
        <div className="contactContainer">
          <div className="contactBackgd">
            <Container text>
              <div className="contactheading">
                <p className="contacttext">Get In Touch</p>
              </div>
              <Segment basic className=" ui secondary contactSeg"
                style={{
                  height: '400px',
                  marginTop: '50px',
                  width: '600px',
                  marginLeft: '-80px',
                  float: 'left'
                }} >
                <Header
                  as='h3'
                  content='Send us a Message'
                  />
                  <Form>
                  <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-first-name' control={Input} label='Your Name' placeholder='joe' />
                    <Form.Field id='form-input-control-email' control={Input} label= 'Email Address' placeholder='joe@abc.com' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-phone-number' control={Input} label= 'Phone Number'placeholder='(800) 800 - 1234' />
                    <Form.Field id='form-input-control-last-name' control={Input} label='Company' placeholder='Google' />
                  </Form.Group>
                    <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Message' placeholder='Hi, I would like to....' />
                    <Button basic floated='right' centered>
                        <Icon name='send' size='big'/>
                    </Button>
                  </Form>
              </Segment>
              <Segment basic className=" ui contseg" style={{
                float: 'left',
                height: '400px',
                marginTop: '-415px',
                width: '250px',
                marginLeft: '520px',
              }}
              raised inverted color="#fff">
                <Header as ='h3' content='Contact Information' inverted textAlign='center'/><br/><br/>
                <div>
                  <Image
                    floated='left'
                    size='mini'
                    src={location}/>
                  <p> 1 Pace Plaza, New York, NY 10038 </p><br/><br/>
                </div>
                <div>
                  <Image
                    floated='left'
                    size='mini'
                    src={email}/>
                  <p> help@ids.com </p><br/><br/>
                </div>
                <div>
                  <Image
                    floated='left'
                    size='mini'
                    src={phone}/>
                  <p> +1 (800) 800 - 1234</p><br/><br/>
                </div>
                <div>
                  <Image
                    floated='left'
                    size='mini'
                    src={facebook}
                    style={{
                      marginLeft:'35px'
                    }}/>
                </div>
                <div>
                  <Image
                    floated='left'
                    size='mini'
                    src={instagram}
                    style={{
                      marginLeft:'15px'
                    }}/>
                </div>
                <div>
                  <Image
                    floated='left'
                    size='mini'
                    src={twitter}
                    style={{
                      marginLeft:'15px'
                    }}/>
                </div>
              </Segment>
            </Container>
          </div>
        </div>
      </Grid>
    )
  }
}
export default contact
