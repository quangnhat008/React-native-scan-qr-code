/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import QRCodeScanner from "./src/QRCodeScanner";


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            code: null
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btnShow} onPress={() => this.setState({modalVisible: true})}>
                    <Text>Slide Show</Text>
                </TouchableOpacity>

                {this.state.code ? <Text style={styles.txtCode}>Code: {this.state.code}</Text> : null}

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({modalVisible: false});
                    }}
                >
                    <QRCodeScanner ref={c => this._scanner = c} onClose={() => this.setState({modalVisible: false})}
                                   onScanned={(e) => this.setState({code: e.data, modalVisible: false})}/>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {flex: 1, justifyContent: 'center', marginHorizontal: 15},
    btnShow: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'green',
        paddingVertical: 10,
    },
    txtCode: {
        marginTop: 20,
        textAlign: 'center'
    }
});

