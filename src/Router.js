import { createStackNavigator } from 'react-navigation';
import MarketPlacePage from './pages/MarketPlacePage';
import MarketPlaceDetailPage from './pages/MarketPlaceDetailPage';


export default createStackNavigator({

  'Main': {
    screen: MarketPlacePage,
  },

  'MarketPlaceDetailPage':{
    screen : MarketPlaceDetailPage,
    navigationOptions: ({ navigation }) => {
      const { supplier } = navigation.state.params;
      return {
          title: supplier.name,
          headerTintColor: 'white',
          headerStyle: {
              backgroundColor: '#328DCA'
          },
          headerTitleStyle:{
            color:'white',
            fontSize: 16,
          }
          
      }
    }
  },  

}, {
  navigationOptions:{
    headerStyle:{
        backgroundColor : 'transparent'
    }
  }
});