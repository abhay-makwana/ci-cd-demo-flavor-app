import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Config from 'react-native-config';

const Dashboard = ({navigation}) => {

    return (
        <View style={styles.container}>
          {console.log("Config val.: ", Config)}
            <View style={styles.mainContainer}>
                <Text style={styles.textSty}>{`Welcome to ${Config.FLAVOR === "dev" ? "Dev" : Config.FLAVOR === "live" ? "Production" : "Staging"} Dashboard`}</Text>
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
