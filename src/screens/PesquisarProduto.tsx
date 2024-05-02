import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";

function PesquisarProduto(): React.JSX.Element {
    return (
        <View>
            <Head/>
            <Text>Tela Principal</Text>
            <Footer/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails: {
        marginLeft: 10,
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default PesquisarProduto;