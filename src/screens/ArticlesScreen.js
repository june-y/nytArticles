import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ArticlesHolder from '../components/ArticlesHolder';
import nyt from '../api/nyt';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ArticlesScreen = () => {
  const Tab = createBottomTabNavigator();
  const [results, setResults] = useState([]);

  const allApi = async () => {
      const allresponse = await nyt.get('/home');
      setResults(response.data.article);
  }

  const artApi = () => {
      const allresponse = await nyt.get('/art');
        setResults(response.data.article);
  }

  const worldApi = () => {
      const allresponse = await nyt.get('/world');
        setResults(response.data.article);
  }

  const businessApi = () => {
      const allresponse = await nyt.get('/business');
        setResults(response.data.article);
  }

  return (
    <View>
    <Text>Articles Screen </Text>
    <Text>We have found {results.length} results. </Text>
    </View>

    <Tab.Navigator>
      <Tab.Screen name="Art" component={ArticlesScreen} />
      <Tab.Screen name="World" component={ArticlesScreen} />
      <Tab.Screen name="Business" component={ArticlesScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ArticlesScreen;
