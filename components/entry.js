import colors from "../assets/colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text, IconButton } from 'react-native-paper';
import TopicsStuff from "../assets/allTopics";
import commonStyles from "./styles";

const Entry = ({entry, fun, user1}) => {

  const users = [
    {
      "id": 1,
      "username": "John",
      "email": "john@email.com",
      "phone": "89873660679",
      "password": "123",
      "birthday": "2004-05-04",
      "gender": true,
      "pfp": "bl.jpg",
      "topics": []
    },
    {
      "id": 2,
      "username": "Kate",
      "email": "kate@email.com",
      "phone": "89875152536",
      "password": "123",
      "birthday": "2001-03-03",
      "gender": false,
      "pfp": "cat.jpg",
      "topics": []
    }
  ];
  const user = users.find(u => u.id === entry.iduser);

  const LeftContent = () => 
    <Avatar.Image
      size={50}
      source={require('./../assets/nature.jpg')} 
    />;

  const formatDate = (inputDate) => {
    const regex = /(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/;
    const formattedDate = inputDate.replace(regex, '$2 $1');
    return formattedDate;
  }

  const getIcon = (topic) => (
    TopicsStuff.allTopics.find(it => it.name === topic).icon
  );

  const visabilityIcon = () => {
    if (entry.visibility === "public")
      return "earth";
    return "lock-outline";
  }

  return (
    <Card mode="elevated">
      <Card.Title
        title={user.username}
        subtitle={formatDate(entry.posted)}
        left={LeftContent}
        right={() => (
          <IconButton icon={visabilityIcon()} iconColor={colors.primary} />
        )}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={{ paddingBottom: 10 }}>{user.id} {entry.content}</Text>
      </Card.Content>
      <Card.Cover source={require('./../assets/nature.jpg')} />
      <Card.Actions style={styles.cardActions}>
        <View style={styles.leftIcons}>
          {entry.topics.map((item, index) => {
            const icon = getIcon(item);
            return (
              <IconButton
                key={index}
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
          onPress={() => fun()}
          style={commonStyles.circleIcon}
        />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  icon: {
    margin: 0,
  },
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
