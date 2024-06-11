import colors from "../assets/colors";


import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
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
              <Ionicons name="chatbubbles" size={24} color={colors.primary} />
            </Card.Actions>
          </Card>
  );
};


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.bgGray,
    paddingTop: 30,
    paddingLeft: 20,
  },
});

export default Entry;