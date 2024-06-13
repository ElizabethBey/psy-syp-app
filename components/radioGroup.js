import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

function RadioGroup() {
  const [isPrivate, setIsPrivate] = useState(true);


  return (
    <View style={styles.group}>
      <Text>Выберите опцию:</Text>
      <RadioButton.Group
        onValueChange={(value) => setIsPrivate(value)}
        value={isPrivate}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="option1" color="blue" />
          <Text>Приватный</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="option2" color="red" />
          <Text>Публичный</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
    group: {
      //height: "100%",
      //backgroundColor: colors.textDark,
      paddingTop: "3%",
      paddingLeft: "5%",
      paddingRight: "5%",
      paddingBottom: "5%",
      margin: "5%",
    },
});

export default RadioGroup;
