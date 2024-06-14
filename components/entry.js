import colors from "../assets/colors";

import React from "react";
import { Avatar, Card, Text, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


const Entry = props => {

  const LeftContent = props => 
    <Avatar.Image size={50} 
        source={{ 
            uri: `https://media.geeksforgeeks.org/wp-content/uploads/20220305133853/gfglogo-300x300.png`, 
        }} 
      /> 

  const formatDate = (inputDate) => {
    const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/
    const formattedDate = inputDate.replace(regex, '$2 $1')
    return formattedDate;
  }
  
  return (
        <Card elevation={5}>
            <Card.Title
              title={props.entry.iduser}
              subtitle={formatDate(props.entry.posted)}
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="bodyMedium" style={{ paddingBottom: 10 }}>{props.entry.content}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://tailwindcss.com/docs/height' }} />
            <Card.Actions>
              <IconButton
                icon="comment"
                size={22}
                color={colors.primary}
                onPress={() => console.log('Кнопка нажата')}
              />
            </Card.Actions>
          </Card>
  );
};


export default Entry;