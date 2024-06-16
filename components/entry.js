import colors from "../assets/colors";

import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text, IconButton } from 'react-native-paper';
import TopicsStuff from "../assets/allTopics";
import commonStyles from "./styles";


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

  const getIcon = (topic) => (
    TopicsStuff.allTopics.find(it => it.name === topic).icon
  );

  return (
        <Card mode="elevated">
            <Card.Title
              title={props.entry.iduser}
              subtitle={formatDate(props.entry.posted)}
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="bodyMedium" style={{ paddingBottom: 10 }}>{props.entry.content}</Text>
            </Card.Content>
            <Card.Cover source={require('./../assets/nature.jpg')} />
            <Card.Actions style={styles.cardActions}>
              <View style={styles.leftIcons}>
                {props.entry.topics.map((item, index) => {
                  const icon = getIcon(item);
                  return (
                    <IconButton
                      key={index} // Не забудьте добавить ключ
                      icon={icon}
                      iconColor={colors.primary}
                      size={22}
                      style={{ borderColor: "transparent", margin: 0 }}
                    />
                  );
                })}
              </View>
              <IconButton
                icon="comment"
                iconColor={colors.primary}
                size={22}
                onPress={() => props.fun()}
                style={commonStyles.circleIcon}
              />
            </Card.Actions>
          </Card>
  );
};

const styles = StyleSheet.create({
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcons: {
    flexDirection: 'row',
    flex: 1,
  },
  
});

export default Entry;