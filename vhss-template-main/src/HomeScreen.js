import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenContent}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/logo.png')} // Replace with the path to your logo image
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              <Text style={{ fontSize: 20 }}>ENTE NADU</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Header Button Pressed')}>
              {/* You can add an icon or any other component here */}
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => alert('Menu Icon Pressed')}>
              <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeScreenContent = () => {
  const buttons = generateButtons(6, 130); // Adjust the number of buttons and radius as needed
  const randomWords = generateRandomWords(6); // Generate an array of random words

  return (
    <ImageBackground
      source={require('../assets/abc.png')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.message}>Home Screen</Text>

        {/* Render the generated buttons with random words */}
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.roundButton,
              {
                top: button.top,
                left: button.left,
              },
            ]}
            onPress={() => alert('Button ${index + 1} (${randomWords[index]}) pressed')}
          >
            <Text style={styles.buttonText}>{randomWords[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const generateButtons = (count, radius) => {
  const buttons = [];
  const angleStep = (2 * Math.PI) / count;
  const centerTop = 250; // Adjust the center position (top) as needed
  const centerLeft = 640; // Adjust the center position (left) as needed

  for (let i = 0; i < count; i++) {
    const angle = i * angleStep;
    const top = Math.sin(angle) * radius + centerTop;
    const left = Math.cos(angle) * radius + centerLeft;

    buttons.push({ top, left });
  }

  return buttons;
};

const generateRandomWords = (count) => {
  // Replace with your logic to generate random words
  const randomWords = ['Home Service', 'Transportation', 'Medical', 'Education', 'Information', 'Shopping'];

  return randomWords.slice(0, count);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'CASTELLAR' // Set text color to contrast with the background
  },
  roundButton: {
    backgroundColor: 'white', // Change the color as needed
    width: 70, // Increase the width to make the button larger
    height: 70, // Increase the height to make the button larger
    borderRadius: 40, // Make it a circle by setting borderRadius to half of the width and height
    position: 'absolute', // Position the button absolutely
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Set text color to contrast with the background
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for a different effect
  },
});

export default HomeScreen;