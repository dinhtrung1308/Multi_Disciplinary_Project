// App.js

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';


// import { dialogflowConfig } from './env';
const botAvatar = require('../../assets/images/robot.jpg')

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: botAvatar,
};

const dialogflowConfig = {
  "type": "service_account",
  "project_id": "faqbot-qyto",
  "private_key_id": "19d25302d3f03bfc77a49d3c43bce6df958fe9e7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCXErbbpZWMpv2d\nSLt9eiV0awSDIMYLTf5nJMEh1i+17g6aTzXJjNHZwrKZ0Zr/3ZTESASg14EYEWth\n0G6BxPKa+6lMIWozdwgyypijwh5ykAa5B8DPE8zv+PMtj2YeAOKM2E5DllZsdO7H\nUGZhUsot3VwBTpkHqW7KPOkoZ46h6wwUCj5VWPpM0CAWEGJwbbS/Lbzno8+SmlA7\nHXce2jYpbr+9tELYnrKTReA+J94P6+jinlxkR4DPWDipUt0kaUG4THo/Z1Ud7eVu\nkveuby7mfYiBy8CIk1OLSPt8XwkR9c6dATUW6fP5RqoSZ/qPjPT8iftgqIzkYCJj\nSrXkuL01AgMBAAECggEAI/66gOUYF9Yl8VbGDWSQDgf9oDyr0z+3EN5KAgTlg0SA\nSDX9S9N4oJjqMwolEze5XXcHW0ddo91qp3ihC9xgLZsuwEvp4O9IjcmFyubSmFtG\nrslxICXIm5jGYCGdpCJz2DkllKb6WocV6Xl3m1K9h2YJqOoQPioZkqgmqZDbBCr9\nz2pSa+m/LuIY3fCjnsTBUzOkTo7I94CWdRFa4WAM2rL5ojbjWYl8g87J2Vx7ilxW\nzEDw5PuFW/UHh/CV8uG6+8dWDYw3yRmkBlMHPwQAM7Q9GpJEk0nqybShRmii+mJL\nx14l87PUM22fE4/s5/Z4CUPeKVjW4jJCUfBbiuz4tQKBgQDUFtA/5GqoWGAZuKoj\n9G4cprwr9OmMzFKtcqeyE4D1LDD9GpTJkya5iiD0iL4/hc/PYmOpc0KOCfxgsNJs\nTQXJZqCj30DIlBOfcC14YVBvnfTHXbgPKWLnSE/R4URcQy0EyaisXkPRMroJxmFY\nsvXdAfpBQBhmdvoIMPm8XwkuBwKBgQC2Wes4lqsVsdrfMqJesV9rHBVv7SbmBrN6\nwNsnctC/4v8YWDEKE7KZQRf5htjGi2xdTH4YJVwxt8tNQeXgFjN8S2c+4ECxVsKp\nzdGX3AbfjXMNIexTyG8IPrhjYSJ9Jgw3XNj+/lyoRY90QiPW7rdkDbY23o8QdUhB\ngd4flehr4wKBgEgdaboP5ORRCHw2ekO3fSlo2Frp7+/cGdC4R6UZVKQI3q9xNl5E\nFsrH2OTNCkN3MG4HunOHqX26j4IhHauNlQYiS0TtSI3rK7Du58ci78LEJtMTXt5o\n6CRURi/LNP9aKBiUqTHS66RaZz+joL4UO91mKr29GY7dra7TWFdgyTJJAoGAUmjc\nxxxAgXN5iPlnLAhZKRzuC0FQHRDWOBnEcVWQRcgepS/mKbmxM1WZsilg+om0FY4m\nRl9MBSQc+vNXIiimZ/vj0ySh2ANvwjHEES9c49cXMc4s8chZdY5y4mbZoVl6l+Kc\nJtFpqpqVNGNXsyD7PHp96No4KaX3W7OHYRrsiSUCgYBSnBsWDBMsqAaGn7c+0OiM\n/Xyd4o2l+Ec6jwH0SnHZnDZaTcAf9Oxjn5AsFXWOeWk9s+HWvNz6Ki29ZVYZezan\nyPwAKSZe3BvgLe63URyqZhdFMtHnJx1rJhtbgwGJ+5GgZFKxMDPhJYObsSxb4ryu\nAsUMHwtTvzoAMboM8hngQQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "chatbot-faq@faqbot-qyto.iam.gserviceaccount.com",
  "client_id": "104210076163196932427",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/chatbot-faq%40faqbot-qyto.iam.gserviceaccount.com"
};
export default class Chatbot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the FAQ bot 🤖 .\n\nHow may I help you with today? Type Get Started!`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ],
    id: 1,
    name: ''
  };
 
 static navigationOptions = {
        title: 'Chatbot',
    };
  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      (result) => {
        console.log(result);
        // this.handleGoogleResponse(result);
      },
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

 
