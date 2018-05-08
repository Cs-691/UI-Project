import React, {Component} from 'react';
import {Segment, Grid, Header, Container} from 'semantic-ui-react';

class About extends Component{
  render(){
    return(
      <Grid>
        <Segment basic style={{ marginTop: '20px', height: '100px', width: '100%'}}>
          <Header as='h1'
            content='About Us!'
            style={{
            textAlign:'center',
            fontSize:'3em'}}/>
        </Segment>
        <Grid.Row>
        <Grid.Column width={6}>
        <Segment basic >
          <Container text>
              <p style={{textAlign:'justify', marginTop:'50px', marginLeft:'10px', fontSize:'2em'}}><span> We are combining the ever-growing <br/>
                computing power of machines with <br/> the best medical expertise of humans<br/> to create a
                comprehensive, <br/>immediate and personalized health <br/> service and
                making it universally<br/> available.</span></p>
          </Container>
        </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment basic style={{width:'100%', height:'400px'}}>
            <div className="abtimg1">
            </div>
          </Segment>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
          <Segment textAlign='center' style={{marginTop:'10px', width:'1400px', marginLeft:'70px'}}>
          <p style={{fontSize:'2em'}}>We understand your symptoms and direct you to the best and most appropriate solution</p>
          </Segment>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10}>
          <Segment basic style={{width:'100%',height:'420px'}}>
            <div className="abtimg2"/>
          </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <p style={{fontSize:'2em', marginTop:'180px', textAlign:'justify', marginRight:'10px'}}>Our AI system is being created by <br/> experienced scientists using real datasets and by using the latest advances in deep learning.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
          <Segment basic>
            <p style={{marginTop:'240px', fontSize:'2em', marginLeft:'10px'}}>
              We track your medical history, and medical conditions to understand you better. Unless you’ve had the same doctor since you were born and he/she magically remembers your entire medical history, AI Doc is your best bet at a personalized medical advice.            </p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment basic style={{width:'100%',height:'420px'}}>
            <div className="abtimg3"/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Segment raised style={{marginLeft: '70px', width: '1400px', marginTop:'80px'}}>
          <p style={{textAlign:'center', fontSize:'2em'}}>
            We assess known symptoms and risk factors to provide informed, up-to-date medical information.
          </p>
        </Segment>
        <br/><br/>
      </Grid>
    );
  }
}
export default About;
