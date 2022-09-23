import { screenWidth, screenHeight } from "../config/index";

const noteItemDimensions = {
  noteContainerWidth: screenWidth * 0.86,
  noteHeaderWidth: screenWidth * 0.84,
  inSectionNoteHeaderWidth: screenWidth * 0.48,
  noteItemSectionHeaderTagDimensions: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 150,
  },
  bergerMenuButton: {
    width: 20,
    height: 20,
    justifyContent:'center', 
    paddingLeft: 10
  },
  noteItemHeaderTagDimensions: {
    width: screenWidth * 0.83,
    paddingVertical: 5,
  },
  noteItemBodyDimensions: {
    width: screenWidth * 0.85,
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.01,
  }
};

export { noteItemDimensions };
