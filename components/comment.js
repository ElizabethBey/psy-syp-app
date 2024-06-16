import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Comment = ({ comment }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../assets/greeting.png')} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.username}>{comment.username}</Text>
          <Text style={styles.date}>{comment.posted}</Text>
        </View>
      </View>
      <Text style={styles.commentText}>{comment.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flexDirection: 'column',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#666',
    fontSize: 12,
  },
  commentText: {
    fontSize: 14,
  },
});

export default Comment;