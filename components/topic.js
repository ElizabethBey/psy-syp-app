import Heading from "./heading"
import colors from "../assets/colors"
import commonStyles from "./styles";

import { Chip } from "react-native-paper";
import { View, StyleSheet } from "react-native";


const Topic = () => (
    <View style={styles.chip}> 
        <Chip icon="information" mode="outlined" 
            selectedColor={colors.primary}
            onPress={() => console.log('Pressed')}>
                Topic
        </Chip>
    </View>
);

const styles = StyleSheet.create({ 
    chip: {
        alignItems: 'center',
        width: 120, 
        marginLeft: 20, 
        marginTop: 20, 
        marginBottom: 10, 
        elevation: 15,
    }, 
  });

export default Topic;