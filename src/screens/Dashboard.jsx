import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Dashboard = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.textSty}>Welcome to Dashboard</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textSty: {
    fontSize: 18
  }
});

export default Dashboard;
