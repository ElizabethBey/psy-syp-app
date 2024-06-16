import colors from "../assets/colors"
import commonStyles from "./styles";

import { Chip } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Topic = (props) => {
    const [disabled, setDisabled] = useState(false);
    const [customColor, setColor] = useState(colors.disabled);

    const iteract = () => {
        if (disabled) setColor(colors.disabled);
            else setColor(colors.ligthPrimary);
        setDisabled(!disabled);
        props.fun(props.item.name);
    };
    
    return (
        <View style={commonStyles.chip}> 
            <Chip compact
                icon={() => <Icon name={props.item.icon} size={20} color={colors.primary}/>} 
                onPress={iteract}
                style={ { backgroundColor: customColor } }
                selectedColor={ colors.primary }
                >
                    {props.item.name}
            </Chip>
        </View>
    );
};

const styles = StyleSheet.create({
    chip: {
        margin: 4,
      },
  });
  

export default Topic;