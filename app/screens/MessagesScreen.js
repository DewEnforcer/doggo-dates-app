import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import messageClient from "../api/messages";
import ListItem from '../components/ListItem';
import routes from "../components/navigation/routes";

function MessagesScreen({navigation}) {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const {data, ok} = await messageClient.getMessages();
        if (ok) setMessages(data);
    }

    useEffect(() => {
        fetchMessages();
    }, [])

  return (
    <Screen>
       <FlatList
        data={messages}
        keyExtractor={ m => m.id.toString()}
        renderItem={({item: m}) => <ListItem onPress={() => navigation.navigate(routes.CHAT, {chatId: m.chatId})} avatar={m.user.avatar} title={m.user.name} subTitle={m.text}/>}
       />
    </Screen>
  );
}

export default MessagesScreen;