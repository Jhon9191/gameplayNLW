import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: theme.colors.secondary90
  },

  input:{
    height: 50,
    width: 200,
    borderBottomWidth: 2,
  },

  image:{
    height: 360,
    width: "100%"
  },

  content:{
    marginTop: -40,
    paddingHorizontal: 50
  },  

  title:{
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },

  subtitle:{
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }

});