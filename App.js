import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Decks from './components/Decks';
import NewDeck from './components/NewDeck';
import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './ReactotronConfig'
import Reactotron from 'reactotron-react-native';
import { setLocalNotification } from './utils/notifications'


const store = Reactotron.createStore(reducer, applyMiddleware())


function UdaciCardsStatusBar(){
  return(
      <View style={{backgroundColor: "black",  height: Constants.statusBarHeight }}>
        <StatusBar backgroundColor={"blue"} barStyle='light-content'/>
      </View>
    )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: "white",
    labelStyle: {
      fontSize: 21
    },
    style: {
      backgroundColor: 'black',

    }
  }
});


const MainNavigator = StackNavigator({
    Home: {
      screen: Tabs
    },
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: {
        title: 'Deck Details',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    }

})


export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciCardsStatusBar />
          <MainNavigator />
        </View>
      </Provider>

    );
  }
}


