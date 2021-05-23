# Multi_Disciplinary_Project
Smart Home application using React Native

In order to run this project first you have to install:
- The environment follow this link: https://www.raywenderlich.com/247-react-native-tutorial-building-android-apps-with-javascript
  Which includes:
  + **Node.js**: this will install **npm** for you
  + **React-native**: npm install -g react-native-cli
  + **Android Studio**: install the emulator
  **Note:** remember that we are using **react-native** not expo.

- Create your own project: 
  + react-native init _projectName_
  + cd _projectName_  

- From github you should copy the following folders:
  + assets
  + components
  + constants
  + routes
  + screens

- Next, install the following packages:
  + npm install react-native-vector-icons
  + Follow the directions of following link: https://reactnavigation.org/docs/getting-started/
  + npm install native-base --save
  + npm install react-native-paper

- Remember to run the emulator on Android Studio.

- Finally install the packages onto your app:
  + npm install
  + react-native run-android
  **Note:** this for Android

If your project fails to connect to the emulator.
- react-native doctor
After that let it fixes the problem, restart the computer and run the app again.
