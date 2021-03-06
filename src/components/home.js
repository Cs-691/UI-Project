import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoginForm from './loginform.js';
import RegisterForm from './registerform.js';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility, Modal}
from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
<Segment inverted style={{minHeight: 650, padding: '1em 0em'}} vertical textAlign='center'>
  <Container text>
    <Header
      as='h1'
      content='ILLNESS DIAGNOSIS SYSTEM'
      inverted
      style={{
        fontSize: mobile ? '2em' : '3.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2.8em',
      }}
    />
    <Header
      as='h2'
      content='A CLEVER Person Solves a Problem. A WISE Person Avoids It!'
      inverted
      style={{
        fontSize: mobile ? '1.2em' : '1.5em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.2em',
      }}
    />
    <Button color='teal'  size='huge' >
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
  </Segment>

)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

const HomepageLayout = () => (

  <div>
  <HomepageHeading/>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We help you to understand your symptoms</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We can provide you precautions based on your symptoms</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes thats right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='medium'
              src='./Assets/images/demo.jpg'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/assets/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the art of doing
          nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
          and worth your attention.
        </p>
        <Button as='a' size='large'>Read More</Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='/'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really
          true.
          It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as='a' size='large'>Im Still Quite Interested</Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Footer Header</Header>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)
export default HomepageLayout
