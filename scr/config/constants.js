import { Dimensions, StatusBar } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height - StatusBar.currentHeight;

const colorSchema = {
  MainBackground: "#fff",
  MainTxt: "#3634A9",
  SecTxt: "#F7F6FF",
  MainBtn: "#3634A9",
  MainBtnTint: "#2F2CBF",
  SecBtn: "#F7F6FF",
  SecBtnTint: "#ECEBFF",
  dividerTone: "#A1A0F1",
  inputColor: "#D2E9FF",
  MainTextTone: "#4B85F4",
  sectionBtnTint: "#D1EBFA",
  pressedButtonColor: "#C4C3EF",
  pressedButtonColorTint: "#EFEFFF",
  addSectionColor: "#EFF7FF",
  addSectionColorReverse: "#3634A9",
  createNoteContainer:"#F9FCFF",
  createNoteContainerBorder:"#197ADC",
  playButton:"#3634A9",
  pauseButton:"#EFF7FF",
  icons:"#3634A9", 


};

const buttonGradient = {
  noteButton: ["#CAB8FF", "#1D19CF"],
  voiceNoteButton: ["#68BCE0", "#2F2BE7"],
  cameraNoteButton: ["#8AF29B", "#2421C5"],
  videoNoteButton: ["#FFB4AF", "#4738EA", "#423EE2"],
};

const mediaButtonGradient = {
  middleButton: ["#CAB8FF", "#1D19CF"],
  otherButton: ["#68BCE0", "#2F2BE7"],
};

export {
  screenHeight,
  screenWidth,
  colorSchema,
  buttonGradient,
  mediaButtonGradient,
};
