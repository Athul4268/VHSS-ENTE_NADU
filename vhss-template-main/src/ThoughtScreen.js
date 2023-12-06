// ThoughtScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button, BackHandler, StyleSheet } from 'react-native';

const ThoughtScreen = ({ navigation }) => {
  useEffect(() => {
    const onBackPress = () => {
      // Close the app when the back button is pressed
      BackHandler.exitApp();
      return true; // Prevent default behavior (closing the app)
    };

    // Add event listener for the back button press
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Clean up the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

  const handleSkip = () => {
    // Navigate to the next screen after clicking the skip button.
    // Replace 'Login' with the name of your next screen.
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Thought for the Day</Text>
      {/* Add your thought content here */}
      <Button title="Skip" onPress={handleSkip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThoughtScreen;
