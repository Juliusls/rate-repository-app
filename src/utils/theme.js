import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        textGrey: '#808080',
        textWhite: 'white'
    },
    fontSizes: {
        body: 16,
        subheading: 14,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    appBar: {
        backgroundColor: '#24292e',
        whiteText: '#e1e4e8',
        bald: 'bold',
        textPadding: 10
    },
    card: {
        backgroundColor: '#24292e',
    },
    circle: {
        width: 50,
        height: 50
    }
    
};
  
export default theme;