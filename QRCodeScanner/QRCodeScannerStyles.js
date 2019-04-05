import {appFontSizes, height} from "../../common/Constanst";

// const
export default {
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    notScanHelpView: {
        flexDirection: 'row',
    },
    txtScanHelp: {
        alignSelf: 'flex-start',
        marginLeft: 5,
        fontSize: appFontSizes.sz14,
        color: 'white',
        textAlign: 'center',
        marginBottom: 3,
    },
    btnTurnOnFlash: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 80,
        width: 80,
        position: 'absolute',
        top: 0,
        right: 0,
        paddingTop: 10,
        paddingRight: 7,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderBottomLeftRadius: 80
    },
    btnBack: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        left: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    topView: {
        height: height * 0.28,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0, 0.4)'
    },
    centerView: {
        height: height * 0.36,
        flexDirection: 'row'
    },
    outLineScanner: {
        height: height * 0.35,
        width: height * 0.35
    },
    txtFlashLight: {
        color: 'white',
        textAlign: 'center',
        fontSize: appFontSizes.sz12,
        marginBottom: 25,
        marginTop: 3,
    },
    readQRView: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.36,
        width: height * 0.36,
        borderRadius: 18,
    },
    bottomView: {
        //marginVertical: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0, 0.4)'
    },
    txtError: {
        color: '#d0021b',
        textAlign: 'center',
        fontSize: appFontSizes.sz14
    },
    btnInputQR: {
        backgroundColor: 'transparent',
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: 'white',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
        marginTop: 10,
        height: 45,
    },
    txtInputQR: {
        color: 'white',
        fontFamily: 'HelveticaNeue-Medium',
        textAlign: 'center',
        fontSize: appFontSizes.sz18
    },
    txtScanQR: {
        color: 'white',
        fontFamily: 'HelveticaNeue-Bold',
        textAlign: 'center',
        fontSize: appFontSizes.sz18,
    },
}