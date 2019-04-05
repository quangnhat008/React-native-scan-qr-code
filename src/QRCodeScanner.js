import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, Vibration} from 'react-native';
import {RNCamera} from "react-native-camera";
import Sound from 'react-native-sound';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const resource = {
    scanQR: require('./resource/scan_qr.png'),
    scannerBip: require('./resource/scanner_beep.mp3'),
    arrow_help: require('./resource/arrow_help.png')
};

type Props = {
    timeDelay: number
}

export default class QRCodeScanner extends Component<Props> {
    constructor(props) {
        super(props);
        Sound.setCategory('Playback', true);

        this.state = {
            isFlashOn: false,
            isCameraBack: true,
            isDelayMode: false,
            enable: true,
            errorMsg: null
        };

        this.beep = new Sound(resource.scannerBip).setVolume(1)
        // this.checkPermission();
    }

    // openSetting = () => {
    //     Platform.OS == 'ios' ? Permissions.openSettings() : AndroidOpenSettings.appDetailsSettings();
    //
    // };

    // checkMultiPermissions = async(listPermissions)=>{
    //     return await Permissions.checkMultiple(listPermissions);
    // }

    // checkPermission = () => {
    //     checkMultiPermissions(["camera"]).then(result => {
    //         if (result["camera"] == 'denied')
    //             Alert.alert(
    //                 I18n.t('eco.common.title_noti'), I18n.t('payUser.permission_camera_noti'),
    //                 [
    //                     {
    //                         text: I18n.t('btn.close'),
    //                     },
    //                     {text: I18n.t('btn.next'), onPress: () => openSetting()},
    //                 ],
    //             )
    //     })
    // };

    toggleFlash = (isFlashOn) => this.setState({isFlashOn});

    toggleOnOff = (enable) => this.setState({enable});

    showMessage = (errorMsg) => this.setState({errorMsg});

    componentWillUnmount() {
        clearTimeout(this.timerOut);
        clearTimeout(this.timeDelay);
    }

    render() {
        // return <View style={{backgroundColor: 'white', flex: 1}}/>
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={'camera'}
                    barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                    onBarCodeRead={(e) => {
                        // console.log('e', e);
                        if (this.state.enable && !this.state.isDelayMode) {
                            this.setState({isDelayMode: true}, () => {
                                this.beep.play();
                                Vibration.vibrate(150);
                                // alert('code', e.data);
                                this.props.onScanned(e);
                            });

                            this.timeDelay = setTimeout(() => {
                                this.setState({isDelayMode: false, errorMsg: null});
                            }, this.props.timeDelay || 3000);
                        }
                    }}
                    // getSupportedRatiosAsync={(info) => console.log('info', info)}
                    style={styles.preview}
                    type={this.state.isCameraBack ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                    flashMode={this.state.isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Cấp quyền sử dụng Camera'}
                    permissionDialogMessage={'Chúng tôi cần quyền truy cập camera trên điện thoại của bạn'} // 'We need your permission to use your camera phone'
                >
                    <View style={styles.topView}>
                        <TouchableOpacity style={styles.btnTurnOnFlash}
                                          onPress={() => this.setState({isFlashOn: !this.state.isFlashOn})}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={'ios-flash'} size={25} color={'white'}/>
                                <Text style={styles.txtFlashLight}>{this.state.isFlashOn ? 'Tắt đèn' : 'Bật đèn'}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnBack}
                                          onPress={this.props.onClose}>
                            <Icon name={'ios-arrow-back'} size={30} color={'white'}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnBack, {left: 60}]}
                                          onPress={() => this.setState({isCameraBack: !this.state.isCameraBack})}>
                            <Icon name={'ios-reverse-camera'} size={30} color={'white'}/>
                        </TouchableOpacity>

                        <Text style={styles.txtScanQR}>{'Quét mã QR của đại lý'}</Text>
                        <Text style={styles.txtFlashLight}>{'Di chuyển Camera để thấy rõ toàn bộ mã QR'}</Text>
                    </View>

                    <View style={styles.centerView}>
                        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0, 0.4)'}}/>
                        <View style={styles.readQRView}>
                            <Image style={styles.outLineScanner} source={resource.scanQR}
                                   resizeMode={'contain'}/>
                        </View>
                        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0, 0.4)'}}/>
                    </View>

                    <View style={styles.bottomView}>
                        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 10}}>
                            {this.state.errorMsg != null ?
                                <Text style={styles.txtError}>{this.state.errorMsg}</Text>
                                : null}
                        </View>

                        {/*<View style={styles.notScanHelpView}>*/}
                            {/*<Image style={{alignSelf: 'flex-end'}} source={resource.arrow_help} resizeMode={'contain'}/>*/}
                            {/*<Text style={[styles.txtScanHelp]}>{'Không quét được mã QR'}</Text>*/}
                        {/*</View>*/}

                        {/*<TouchableOpacity style={styles.btnInputQR} onPress={this.showQRInputView}>*/}
                            {/*<Text style={styles.txtInputQR}>{'Nhập mã QR'}</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>

                </RNCamera>

            </View>
        )
    }
}
