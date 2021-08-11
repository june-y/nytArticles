import {createStackNavigator, createAppContainer} from 'react-navigation';
import ArticlesScreen from './src/screens/ArticlesScreen';

const navigator = createStackNavigator({
  Articles: ArticlesScreen
},
  {
    initalRouteName: 'Articles',
    defaultNavigationOptions: {
      title: 'NYT Articles'
    }
  });

export default createAppContainer(navigator);
