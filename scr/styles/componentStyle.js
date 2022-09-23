import React from 'react';
import {StyleSheet} from 'react-native';

import {screenWidth, screenHeight, colorSchema} from '../config/index';

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
  addSectionColorReverse,
  createNoteContainer,
  createNoteContainerBorder,
} = colorSchema;

const gs = StyleSheet.create({
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRad: {
    borderRadius: 10,
  },
  defaultWidth: {width: screenWidth * 0.75},
  defaultHeight: {height: screenHeight * 0.075},
  defaultBorderWidth: {
    borderWidth: 2,
  },
  B24: {fontWeight: 'bold', fontSize: 24},
  B20: {fontWeight: 'bold', fontSize: 20},
  B18: {fontWeight: 'bold', fontSize: 18},
  borderDefaultColor: {borderColor: MainBtn},
  WhiteBG: {backgroundColor: '#fff'},
  MainFontColor: {color: MainBtn},
  absolutePosition: {
    position: 'absolute',
    top: 0,
  },
  defComHeight: {
    height: screenHeight * 0.05,
  },
});

const ButtonComponent = StyleSheet.create({
  container: {
    ...gs.defaultWidth,
    ...gs.defaultHeight,
    ...gs.centerAlign,
    ...gs.borderRad,
    backgroundColor: '#3656FF',
  },
  title: {
    ...gs.B24,
    color: SecTxt,
    letterSpacing: 3,
  },
  outline: {
    ...gs.borderRad,
    ...gs.defaultWidth,
    ...gs.defaultBorderWidth,
    ...gs.defaultHeight,
    ...gs.centerAlign,
    ...gs.borderDefaultColor,
    ...gs.WhiteBG,
    flexDirection: 'row',
  },
  outlineTitle: {
    ...gs.MainFontColor,
    ...gs.B20,
  },
  numberContainer: {
    width: screenWidth * 0.65,
    alignItems: 'center',
  },
  iconContainer: {
    ...gs.centerAlign,
    width: screenWidth * 0.075,
    alignItems: 'center',
    paddingLeft: 10,
  },
  iconSty: {
    fontSize: 18,
    fontWeight: 'bold',
    ...gs.MainFontColor,
  },
});

const SpecButtonSty = StyleSheet.create({
  container: {
    ...gs.defaultWidth,
    ...gs.centerAlign,
    ...gs.borderRad,
    ...gs.defaultBorderWidth,
    height: screenHeight * 0.125,
  },
  title: {
    ...gs.B24,
  },
});

const ReportTypeComSty = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...gs.defaultWidth,
    ...gs.defaultHeight,
    ...gs.WhiteBG,
    justifyContent: 'flex-start',
  },
  section: {
    width: screenWidth * 0.25,
    ...gs.defaultHeight,
    ...gs.borderRad,
    ...gs.centerAlign,
  },
  selected: {
    backgroundColor: MainBtn,
  },
  unselected: {
    backgroundColor: '#fff',
  },
  title: {
    ...gs.B20,
  },
  selectedTitle: {
    color: '#fff',
  },
  unselectedTitle: {...gs.MainFontColor},
});

const SearchKeyCom = StyleSheet.create({
  container: {
    ...gs.defaultWidth,
    ...gs.defComHeight,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxDimentions: {
    height: 20,
    width: 20,
    marginLeft: 5,
    borderRadius: 5,
  },
  selected: {backgroundColor: MainBtn},
  notSelected: {...gs.WhiteBG, borderWidth: 3, borderColor: MainBtn},
  label: {...gs.B20, color: MainBtn},
});

const ValueIncSty = StyleSheet.create({
  fullContainer: {
    ...gs.defaultWidth,
    ...gs.borderRad,
    height: screenHeight * 0.125,
  },
  container: {
    ...gs.defaultWidth,
    ...gs.centerAlign,
    ...gs.defaultBorderWidth,
    ...gs.borderRad,
    ...gs.borderDefaultColor,
    ...gs.WhiteBG,
    flexDirection: 'row',
    height: screenHeight * 0.085,
  },
  label: {
    ...gs.B24,
    ...gs.MainFontColor,
    marginBottom: 10,
  },
  title: {
    ...gs.B24,
    ...gs.MainFontColor,
  },
  titleContainer: {
    ...gs.centerAlign,
    width: screenWidth * 0.45,
    height: screenHeight * 0.065, //Button Height
  },
  iconContainer: {
    ...gs.centerAlign,
    backgroundColor: MainBtn,
    height: screenHeight * 0.055, //Button Height
    width: screenHeight * 0.055,
    borderRadius: 30,
  },
});

const divider = StyleSheet.create({
  dividerContainer: {
    ...gs.centerAlign,

    flexDirection: 'row',
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  orDivider: {
    width: screenWidth * 0.3,
    borderTopWidth: 2,
    borderColor: dividerTone,
  },
  OR_Text: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    color: dividerTone,
  },
});

const textInputComponent = StyleSheet.create({
  inputStyle: {
    ...gs.defaultHeight,
    ...gs.borderRad,
    ...gs.borderDefaultColor,
    ...gs.MainFontColor,
    ...gs.B20,
    textAlign: 'center',
    fontWeight: 'bold',
    width: screenWidth * 0.65,
  },
  container: {
    ...gs.WhiteBG,
    ...gs.defaultWidth,
    ...gs.defaultHeight,
    ...gs.borderRad,
    ...gs.defaultBorderWidth,
    ...gs.borderDefaultColor,
    ...gs.centerAlign,
    flexDirection: 'row',
  },
  left: {
    marginTop: 5,
    ...gs.absolutePosition,
    ...gs.defComHeight,
    ...gs.centerAlign,
    left: 0,
    bottom: 0,
    right: 0,
    width: screenWidth * 0.1,
  },
  leftIconTitle: {...gs.B20, color: MainTextTone},
  label: {
    ...gs.B20,
    ...gs.MainFontColor,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 14,
    padding: 1,
  },
});

const DTPickerComSty = StyleSheet.create({
  container: {
    ...gs.defaultWidth,
    ...gs.borderDefaultColor,

    height: screenHeight * 0.065,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  DTLabelContainer: {
    ...gs.WhiteBG,
    ...gs.borderRad,
    ...gs.defaultBorderWidth,
    ...gs.borderDefaultColor,
    ...gs.centerAlign,
    width: screenWidth * 0.5,
    height: screenHeight * 0.065,
  },
  inputTextSty: {
    width: screenWidth * 0.5,
    textAlign: 'center',
    fontSize: 18,
  },
  DTLabel: {
    ...gs.B20,
    ...gs.MainFontColor,
  },
  changeDTButton: {
    backgroundColor: '#3656FF',
    width: screenWidth * 0.225,
    height: screenHeight * 0.065,
    ...gs.borderRad,
    ...gs.centerAlign,
  },
  changeDTButtonTitle: {
    fontSize: 20,
    color: '#fff',
  },
  label: {
    ...gs.B20,
    ...gs.MainFontColor,
    marginBottom: 5,
  },
});

const SearchBoxComSty = StyleSheet.create({
  container: {
    ...gs.borderDefaultColor,
    borderRadious: 5,
    height: screenHeight * 0.7,
    width: screenWidth * 0.9,
    alignItems: 'center',
  },
  cardContainer: {
    width: screenWidth * 0.88,
    justifyContent: 'center',
    alignItems: 'center',
    ...gs.WhiteBG,
    ...gs.borderRad,
    marginBottom: 5,
    ...gs.defaultBorderWidth,
    ...gs.borderDefaultColor,
  },
  details: {
    borderRightWidth: 1,
    paddingRight: 10,
    ...gs.B18,
    width: screenWidth * 0.6,
    textAlign: 'right',
    ...gs.MainFontColor,
    ...gs.borderDefaultColor,
  },
  detailsTitle: {
    ...gs.B18,
    width: screenWidth * 0.3,
    textAlign: 'right',
    ...gs.MainFontColor,
    ...gs.borderDefaultColor,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: screenWidth * 0.86,
    borderBottomWidth: 1,
    padding: 5,
    ...gs.borderDefaultColor,
  },
  HeaderFontTitle: {
    ...gs.B20,
    ...gs.MainFontColor,
  },
  changeDTButton: {
    backgroundColor: '#3656FF',
    width: screenWidth * 0.225,
    height: screenHeight * 0.065,
    ...gs.borderRad,
    ...gs.centerAlign,
  },
  changeDTButtonTitle: {
    fontSize: 20,
    color: '#fff',
  },
  label: {
    ...gs.B20,
    ...gs.MainFontColor,
    marginBottom: 5,
  },
  emptyResultContainer: {
    width: screenWidth * 0.85,
    height: screenHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyResultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: MainBtn,
  },
});

export const standardsStylesObject = {
  backgroundColor: 'white',
  borderColor: 'grey',
  color: 'black',
  borderRadius: 5,
  borderWidth: 0.5,
  fontSizeNormal: 17,
};

const HeaderSty = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenWidth,
    ...gs.defaultHeight,
    ...gs.WhiteBG,
  },
  headerTitle: {
    ...gs.B20,
    color: '#000',
    letterSpacing: 3,
  },
  titleContainer: {
    width: screenWidth * 0.7,
    ...gs.centerAlign,
  },
});

const SectionSelectorSty = StyleSheet.create({
  container: {height: screenHeight * 0.1},
});

const limitProgressBar = StyleSheet.create({
  container: {
    ...gs.WhiteBG,
    ...gs.defComHeight,
    alignItems: 'flex-end',
  },
  bar: {
    ...gs.defComHeight,
    ...gs.WhiteBG,
    ...gs.centerAlign,
  },
  textContainer: {
    ...gs.absolutePosition,
    ...gs.defComHeight,
    ...gs.centerAlign,
    width: screenWidth,
  },
  limitText: {fontSize: 18, fontWeight: 'bold', textAlign: 'right'},
  emptyLabel: {...gs.MainFontColor},
});

const homeIcons = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 150,
    height: 150,
    margin: 15,
    ...gs.centerAlign,
    ...gs.borderRad,
    backgroundColor: '#D9F1FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  iconTitle: {fontSize: 24, textAlign: 'center', padding: 20, color: '#2C44C2'},
});

const resButtonSty = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-around',
  },
  recentIcon: {
    height: '7.5%',
    width: '7.5%',
    backgroundColor: MainBtn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

const numberSelectorModal = StyleSheet.create({
  container: {
    marginBottom: 10,
    ...gs.WhiteBG,
    ...gs.defaultHeight,
    ...gs.defaultWidth,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  bar: {
    width: screenWidth * 0.7,
    ...gs.defaultHeight,
  },
  textContainer: {
    ...gs.absolutePosition,
    ...gs.defaultHeight,
    ...gs.centerAlign,
    width: screenWidth * 0.7,
  },
  limitText: {...gs.B24, textAlign: 'center'},
  emptyLabelContainer: {
    backgroundColor: MainBtnTint,
    padding: 20,
    borderRadius: 10,
  },
});

export {
  numberSelectorModal,
  homeIcons,
  limitProgressBar,
  SectionSelectorSty,
  ButtonComponent,
  divider,
  textInputComponent,
  HeaderSty,
  SpecButtonSty,
  ValueIncSty,
  DTPickerComSty,
  SearchKeyCom,
  SearchBoxComSty,
  ReportTypeComSty,
  resButtonSty,
};

/*
const linearGradientColors = [MainBtn, MainBtnTint];
const linearGradientColorsOutline = [SecBtn, SecBtnTint];
*/

/*
underlineButtton,
  dialog,  audioSlider,
  Modals,

  viewTypeComponent,
  sectionComponent,
  noteItemStyle,
  NoteAreaComponent,
  SectionSelectorComponent,
  */
/*
const audioSlider = StyleSheet.create({
  StandardText: {
    fontSize: standardsStylesObject.fontSizeNormal,
    padding: 6,
    color: standardsStylesObject.color,
  },
  StandardContainer: {
    borderRadius: standardsStylesObject.borderRadius,
    borderWidth: standardsStylesObject.borderWidth,
    borderColor: standardsStylesObject.borderColor,
    backgroundColor: standardsStylesObject.backgroundColor,
    marginLeft: 10,
    marginRight: 10,
  },
});
*/

/*
const viewTypeComponent = StyleSheet.create({
  viewContainer: {
    justifyContent: 'center',
    width: screenWidth * 0.7,
    height: screenHeight * 0.07,
    borderWidth: screenWidth * 0.008,
    borderRadius: screenWidth * 0.025,
    borderColor: MainBtn,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: screenWidth * 0.69,
    height: screenHeight * 0.07,
  },
  boxContainer: {
    justifyContent: 'center',
    borderRadius: screenWidth * 0.0123,
    alignItems: 'center',
    width: screenWidth * 0.312,
    height: screenHeight * 0.0425,
    marginLeft: screenHeight * 0.01,
  },
  selectedViewContainer: {
    backgroundColor: sectionBtnTint,
  },
  unselectedViewContainer: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    color: MainTxt,
  },
  selectedTitle: {
    fontWeight: '700',
  },
});

const sectionComponent = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: screenWidth * 0.025,
    height: screenHeight * 0.065,
        ...gs.defaultBorderWidth,
    borderRadius: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    width: screenWidth * 0.6,
  },
  counter: {
    width: screenWidth * 0.15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionContainer: {
    width: screenWidth * 0.9,
  },
});

const noteItemStyle = StyleSheet.create({
  noteContainer: {
        ...gs.centerAlign,
    borderWidth: 1,
    width: screenWidth * 0.875,
    marginBottom: screenHeight * 0.01,
    borderRadius: screenHeight * 0.01,
    padding: 5,
  },
  noteHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: noteItemDimensions.noteHeaderWidth,
  },
  noteHeaderTitleContainer: {
    width: noteItemDimensions.inSectionNoteHeaderWidth,
    paddingVertical: 5,
  },
  noteHeaderTitle: {fontWeight: 'bold', paddingLeft: 5},
  noteBody: {textAlign: 'justify', fontSize: 14},
  inSectionNoteItems: {
        ...gs.centerAlign,
  },
});

const NoteAreaComponent = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.55,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: SecBtnTint,
    backgroundColor: createNoteContainer,
    alignItems: 'center',
  },
  itemsContainer: {
    width: screenWidth * 0.89,
    padding: screenHeight * 0.01,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: SecBtnTint,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  itemTextArea: {
    padding: 7,
    width: screenWidth * 0.775,
    color: MainTxt,
  },
  itemVoiceArea: {
    padding: 7,
    width: screenWidth * 0.775,
    color: MainTxt,
        ...gs.centerAlign,
  },
  itemIcon: {
    padding: 7,
  },
});

const SectionSelectorComponent = StyleSheet.create({
  sectionBarContainer: {
    height: screenHeight * 0.065,
        ...gs.centerAlign,
    marginRight: screenWidth * 0.01,
    paddingHorizontal: screenHeight * 0.0125,
    borderRadius: 10,
  },
  sectionBar: {
    backgroundColor: SecBtn,
  },
  selectedSectionBar: {
    backgroundColor: addSectionColorReverse,
  },
  addSectionBtn: {
    width: screenHeight * 0.065,
    height: screenHeight * 0.065,
    backgroundColor: SecBtn,
        ...gs.centerAlign,
    borderRadius: 10,
    marginRight: screenWidth * 0.01,
  },
  section_types: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    height: screenHeight * 0.065,
  },
  sectionAddProcess: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    height: screenHeight * 0.065,
    alignItems: 'center',
    paddingTop: 10,
  },
  sectionTxtInput: {width: screenWidth * 0.75},
});
*/

/*
const dialog = StyleSheet.create({
  textContainer: {
       ...gs.defaultWidth,

    paddingBottom: screenHeight * 0.05,
  },
  dialogStyle: {textAlign: 'center', fontSize: 18, color: MainTxt},
  dialogSpace: {height: screenHeight * 0.035},
});
*/
/*
const underlineButtton = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '500',
    borderBottomWidth: 1,
    marginTop: screenHeight * 0.02,
    color: MainTxt,
    borderColor: MainTxt,
  },
});


const Modals = StyleSheet.create({
  textInputModal: {
    height: screenHeight * 0.525,
    width: screenWidth * 0.95,
    backgroundColor: SecBtnTint,
    ...gs.borderRad,
  },
  saveBtn: {
    height: screenHeight * 0.065,
    width: screenWidth * 0.825,
    backgroundColor: MainBtn,
    alignItems: 'center',
    justifyContent: 'center',
    ...gs.borderRad,
  },
  saveBtnTitle: {
    fontSize: 18,
    color: SecBtnTint,
  },
  headerComponent: {
    height: screenHeight * 0.085,
    width: screenWidth * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    width: screenWidth,
    height: screenHeight * 0.52,
    ...gs.borderRad,
    ...gs.WhiteBG,
    ...gs.centerAlign,
  },
  textModalView: {
    width: screenWidth,
    height: screenHeight * 0.65,
    ...gs.borderRad,
    ...gs.WhiteBG,
    ...gs.centerAlign,
  },
  closeBtnContainer: {
    width: 50,
    height: 50,
    ...gs.borderRad,
    ...gs.centerAlign,
  },
  gcs: {justifyContent: 'center', alignItems: 'center'},
  recordBtnContainer: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.4,
  },
  timeCounter: {
    paddingBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    ...gs.MainFontColor,
  },
  recordBtn: {
    width: 200,
    height: 200,
    backgroundColor: MainBtn,
    ...gs.borderRad,
    ...gs.centerAlign,
  },
  timeCounterLabel: {
    ...gs.MainFontColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  recordIndicator: {
    margin: 10,
    backgroundColor: MainBtn,
    width: 20,
    height: 20,
    ...gs.borderRad,
  },
  timerContainer: {
    ...gs.centerAlign,
    width: 120,
  },
  editHeight: {
    ...gs.defaultHeight,
  },
});

*/
