import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";

import { Chip } from "react-native-paper";
import { View, StyleSheet } from "react-native";


const Topic = () => (
    <View style={styles.chip}> 
        <Chip elevated icon="information" mode="flat" 
            selectedColor={colors.primary}
            onPress={() => console.log('Pressed')}>
                Topic
        </Chip>
    </View>
);

const styles = StyleSheet.create({ 
    chip: {
        margin: 4,
    }, 
  });

export default Topic;