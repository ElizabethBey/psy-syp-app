import Auth from './navigate'
import BottomNavigation from './components/bottomNavigation';
import colors from './assets/colors';
import commonStyles from './components/styles';
import Comment from './components/comment';

import React, { useState, useRef } from "react";
import { View, StyleSheet, Text, TextInput, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize'; 
import { IconButton } from 'react-native-paper';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, 
        {
          id: comments.length.toString(), 
          posted: "2024-10-10", 
          text: newComment,
          username: "John",
        }]);
      setNewComment('');
    }
  };

  const onLogin = () => setAuth(false);

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      {auth ? 
        <Auth onLogin={onLogin} /> :
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <BottomNavigation onOpenModal={openModal}/>

          <Modalize
            ref={modalizeRef}
            handlePosition="inside"
            adjustToContentHeight
            keyboardAvoidingBehavior="padding"
          >
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            >
              <View style={styles.content}>
                <Text style={styles.title}>Комментарии</Text>
                <FlatList
                  data={comments}
                  renderItem={({ item }) => <Comment comment={item}/>}
                  keyExtractor={(item) => item.id.toString()}
                  style={styles.commentList}
                  scrollEnabled={false}
                />
               
                <View style={styles.inputContainer}>
                  <TextInput
                    value={newComment}
                    onChangeText={setNewComment}
                    placeholder="Новый комментарий"
                    style={styles.input}
                    onFocus={() => modalizeRef.current?.open()}
                  />
                  <IconButton
                    icon="send"
                    iconColor={colors.primary}
                    size={22}
                    onPress={addComment}
                    style={commonStyles.circleIcon}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </Modalize>
        </View>}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: colors.bgGray,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  comment: {
    fontSize: 16,
    paddingVertical: 5,
  },
  commentList: {
    flex: 1,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});