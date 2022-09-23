import React from "react";
import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { screenWidth, screenHeight, colorSchema ,buttonGradient} from "../config/index";

const {
  MainBackground,
  MainTxt,
  MainBtn,
  SecTxt,
  MainBtnTint,
  SecBtn,
  SecBtnTint,
  dividerTone,
  inputColor,
  MainTextTone,
  sectionBtnTint,
  pressedButtonColor,
  pressedButtonColorTint,
} = colorSchema;

const floatButtonActivator = StyleSheet.create({
  buttonPosition: {
    width: screenWidth * 0.36,
    height: screenHeight * 0.07,
    justifyContent: "center",
    flexDirection: "row",
  },
  pressed: {},
  notPressed: {},
});

const floatButtonsView = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent:'flex-end',
    alignItems:'center',
    bottom: screenHeight * 0.2,
    width: screenWidth * 0.8,
    height: screenHeight * 0.21,
  },
  buttonsContainer: {
    justifyContent: "flex-start",
    alignItems:'center',

  },
  firstContainer: {
    width: screenWidth * 0.325,
    height: screenHeight * 0.07,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  secondContainer: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.07,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

const optionButton = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: MainBtn,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 50,
    shadowRadius: 25,
    elevation: 3,
  },
  innerContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
  }
});

const linearGradientFLoatButton = [MainBtn, MainBtnTint];
const linearGradientFLoatButton_Pressed = [
  pressedButtonColor,
  pressedButtonColorTint,
];

const cameraLinearGradientFLoatButton = buttonGradient.cameraNoteButton;
const penLinearGradientFLoatButton = buttonGradient.noteButton;
const microphoneLinearGradientFLoatButton = buttonGradient.voiceNoteButton;
const videoLinearGradientFLoatButton =buttonGradient.videoNoteButton ;

export {
  linearGradientFLoatButton,
  linearGradientFLoatButton_Pressed,
  floatButtonActivator,
  floatButtonsView,
  optionButton,
  cameraLinearGradientFLoatButton,
  penLinearGradientFLoatButton,
  microphoneLinearGradientFLoatButton,
  videoLinearGradientFLoatButton
};
