import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment}
from 'semantic-ui-react';

const UserprofilePhoto = ({ mobile }) => (
  <div>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image
            style={{
              marginBottom: 0,
              marginLeft: mobile ? '1.6em' : '1.1em',
              marginTop: mobile ? '1.5em' : '1.8em',
            }}
            verticalAlign= 'middle'
            textAlign='center'
            bordered
            size='medium'
            src='./Assets/images/demo.jpg'
          />
          <Divider section/>
        </Grid.Column>
        <Grid.Column width = {10} floated='right'>
          <Header
            as='h2'
            content='User Name'
            styly={{
              textAlign: 'center',
              marginTop: mobile?'0.1em' : '0.5em',
              marginBottom:0
            }}/>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

UserprofilePhoto.propTypes = {
  mobile: PropTypes.bool,
}

const UserprofileLayout = () => (

  <div>
  <UserprofilePhoto/>

  </div>
)
export default UserprofileLayout
