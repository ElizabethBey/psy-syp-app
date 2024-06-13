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
        paddingTop: 30,
        },
    }
);

export default commonStyles;