import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import messageClient from "../api/messages";
import useAuth from '../auth/useAuth';
import AppForm from '../components/forms/AppForm';
import MessageBox from '../components/MessageBox';
import MessageInput from '../components/MessageInput';
import Screen from '../components/Screen';

function ChatScreen(props) {
    const {user} = useAuth();

    const [chat, setChat] = useState({
        id: 1,
        messages: []
    });
    const {params} = useRoute()
    const chatId = params.chatId;

    const getMessageDetails = async () => {
        const {data} = await messageClient.getRoomMessages(chatId);
        setChat(data);
    }

    useEffect(() => {
        getMessageDetails;
        const newChat = {...chat};
        newChat.messages.reverse(); //use with combination of inverted={-1} to achieve scroll to bottom
        setChat(newChat);
    }, [])

    const handleSubmitMessage = async (items, {resetForm, setFieldValue}) => {
        const data = {id: chat.messages.length+1, text: items.message, chatId: chatId, user: {avatar: require("../assets/hyper.jpg"), name: "Hypi"}} //{user: user}
        const oldChat = {...chat, messages: [...chat.messages]};
        const newChat = {...chat, messages: [...chat.messages]};
        newChat.messages.unshift(data);
        setChat(newChat);

        resetForm();
        
        const {ok} = await messageClient.sendMessage(data);
        if (ok) return;

        setChat(oldChat);
        setFieldValue("message", items.message)
    }

    return (
        <Screen style={{flex: 1}}>          
            <FlatList
                inverted={-1}
                data={chat.messages}
                keyExtractor={m => m.id.toString()}
                renderItem={({item: m}) => <MessageBox order={m.id} avatar={m.user.avatar} name={m.user.name} text={m.text}/>}
            />
            <AppForm
                initialValues={{message: ""}}
                onSubmit={handleSubmitMessage}
                style={styles.messageBar}
            >
                <MessageInput name="message" placeholder="Start typing..."/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
  },
  messageBar: {
      marginVertical: 10
  }
});

export default ChatScreen;