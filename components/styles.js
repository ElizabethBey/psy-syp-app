import { StyleSheet } from "react-native";

import colors from "../assets/colors";

const commonStyles = StyleSheet.create({
        container: {
            display: "flex",
            flex: 1,
            alignContent: "center",
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: colors.bgGray,
            paddingTop: 20,
        },
        titleText: {
            color: colors.textDark, 
            fontSize: 26, 
            fontWeight: "bold",
            padding: "3%",
        },
        simpleText: {
            color: colors.textDark, 
            fontSize: 14, 
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingBottom: "3%" 
        },
        boldText: {
            color: colors.textDark, 
            fontSize: 18,
            fontWeight: 'bold',
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingBottom: "3%",
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignContent: 'center',
          },
        chipRow: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 12,
        },
        chip: {
            margin: 4,
        },
        circleIcon: {
            borderColor: colors.primary,
            borderWidth: 1,
            borderRadius: 20,
            margin: 0, 
        },
    }
);

export default commonStyles;