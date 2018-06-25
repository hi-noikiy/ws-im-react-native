import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { MessageListView } from "../../src/Root";

export default class MessageList extends Component {
    render() {
        return (
            <MessageListView/>
        );
    }
}
