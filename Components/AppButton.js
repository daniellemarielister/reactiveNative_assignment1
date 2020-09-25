import React, {useState} from 'react';
import{ Text, TouchableOpacity, StyleSheet} from "react-native";


export default function AppButton(props) {
    return(
        <TouchableOpacity style={styles.counterContainer} onPress={props.countIncrementHandler} >
        <Text style={styles.counterContainerText}>Yup</Text>
      </TouchableOpacity>
    );

}

const styles = StyleSheet.create({

    counterContainer: {
        // backgroundColor: "#FCBF29",
        backgroundColor: "#1E1E1E",
        padding: 20,
        width: 300,
        borderRadius: 15,
        marginTop: 20,
    },
    
    counterContainerText: {
      textAlign: "center",
      color: "#EAE1CC",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: 2,
    },
});
