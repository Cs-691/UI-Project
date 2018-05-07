import React ,{ Component} from 'react';
import {Grid, Segment, Container, Header, Divider} from 'semantic-ui-react';
import {Widget, addResponseMessage, showCloseButton } from 'react-chat-widget';
import {Launcher,Message} from 'react-chat-window';
import messageHistory from './messageHistory';
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT} from '../events.js';

const socketURL="http://127.0.0.1:1357"
export default class diagnose extends Component{

  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null,
      messageList: messageHistory
    };
  }

  componentWillMount(){
    this.initSocket()
  }

  initSocket = () => {
    const socket = io({socketURL})
    socket.on('connect', () =>{
      console.log("connected");
    })
    this.setState({socket})
  }

  setUser = (user) => {
    const {socket} = this.state
    socket.emit(USER_CONNECTED, user);
    this.setState({user})
  }

  logout = () => {
    const {socket} = this.state
    socket.emit(LOGOUT)
    this.setState({user:null})
  }

  _onMessageWasSent(message) {
console.log(message);
    this.setState({
      messageList: [...this.state.messageList, message]
    })
//this.__sendMessage(message['data']['text']);
//  alert(message['data']['text'])

   this._sendMessage(message['data']['text']);
  }
  _onMessageReceived(message) {
      this.setState({ messages: [...this.state.messages, message] });

    }

  _sendMessage(text) {
    alert(text)
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }


  render(){
    return(
      <div>
        <Grid container stackable verticalAlign='middle' style={{height: '100%', marginTop: '1em'}}>
          <Grid.Column width={6} style={{height:'600px'}}>
            <Segment vertical style={{height: '100%'}} >
              <Grid.Row style={{marginTop: '1em', marginBottom: '1em'}}>
                <Header as = 'h3' style={{marginLeft: '1em', marginTop: '1em'}}>
                  1. How to start the conversation?
                </Header>
                <p style={{marginLeft: '3.0em'}}>
                  a.
                </p>
                <p style={{marginLeft: '3.0em'}}>
                  b.
                </p>
                <p style={{marginLeft: '3.0em'}}>
                  c.
                </p>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
              <Header as = 'h3' style={{marginLeft: '1em', marginTop: '1em'}}>
                2. How to ask symtopms?
              </Header>
              <p style={{marginLeft: '3.0em'}}>
                p.
              </p>
              <p style={{marginLeft: '3.0em'}}>
                q.
              </p>
              <p style={{marginLeft: '3.0em'}}>
                r.
              </p>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
              <Header as = 'h3' style={{marginLeft: '1em', marginTop: '1em'}}>
                3. How to end the conversation?
              </Header>
              <p style={{marginLeft: '3.0em'}}>
                x.
              </p>
              <p style={{marginLeft: '3.0em'}}>
                y.
              </p>
              <p style={{marginLeft: '3.0em'}}>
                z.
              </p>
              </Grid.Row>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10} floated='right' style={{height: '620px'}}>
          <Grid.Row style={{marginBottom: '1em', marginRight: '1em'}}>
            <div>
            <Launcher
        agentProfile={{
          teamName: 'ILLNESS DIAGNOSIS',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.pn'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        onMessageWasRecived={this._onMessageReceived.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
            </div>
            </Grid.Row>
          </Grid.Column>
        </Grid>
    </div>
    )
  }
}
