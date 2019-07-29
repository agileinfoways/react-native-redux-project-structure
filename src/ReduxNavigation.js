import React from "react";
import { BackHandler, Alert } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from 'react-redux'
import AppNavigator from './appRouteConfig';
import { createReduxContainer } from 'react-navigation-redux-helpers';

const App = createReduxContainer(AppNavigator);

class ReduxNavigation extends React.Component {
 componentDidMount() {
  BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
 }

 componentWillUnmount() {
  BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
 }

 onBackPress = () => {
  const { dispatch, nav } = this.props;
  if (nav.index === 0) {
   Alert.alert(
    'Exit App',
    'Exiting the application?', [{
     text: 'Cancel',
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel'
    }, {
     text: 'OK',
     onPress: () => BackHandler.exitApp()
    },], {
     cancelable: false
    }
   )
   return true;
  } else {
   dispatch(NavigationActions.back());
   return true;
  }
 };

 render() {
  const { nav, dispatch } = this.props;
  return <App state={nav} dispatch={dispatch} />;
 }
}

const mapStateToProps = state => ({
 nav: state.nav
});

export default connect(mapStateToProps)(ReduxNavigation);