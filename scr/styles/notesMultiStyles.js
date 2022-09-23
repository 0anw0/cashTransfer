import React from "react";
import { StyleSheet } from "react-native";

function _getNoteContainerStyle(style) {
  let sectionTagColor,
    sectionTagBackgroundColor,
    dateColor,
    bergerMenuColor,
    HeaderColor,
    descriptionColor,
    BackgroundColor,
    buttonColor,
    activeButtonColor,
    activeImageSelectorColor,
    imageSelectorColor,
    containerBorder;
  switch (style) {
    case "yellow": {
      sectionTagColor = "#A88E08";
      sectionTagBackgroundColor = "#EEF0A1";
      containerBorder = "#F7F8CA";
      dateColor = "#CDCD34";
      bergerMenuColor = "#DABA13";
      HeaderColor = "#765E0B";
      descriptionColor = "#765E0B";
      BackgroundColor = "#FEFFDA";
      buttonColor = "#B1B428";
      activeButtonColor = "#F2EA1B";
      activeImageSelectorColor = "#FAFF01";
      imageSelectorColor = "#C2BC18";
      break;
    }
    case "red": {
      sectionTagColor = "#A82E08";
      sectionTagBackgroundColor = "#F0AFA1";
      containerBorder = "#FFD6D6";
      dateColor = "#CD5934";
      bergerMenuColor = "#DA3713";
      HeaderColor = "#760B0B";
      descriptionColor = "#760B0B";
      BackgroundColor = "#FFE4E4";
      buttonColor = "#B42828";
      activeButtonColor = "#FF2C2C";
      activeImageSelectorColor = "#FF4D01";
      imageSelectorColor = "#C24118";
      break;
    }
    case "cyan": {
      sectionTagColor = "#089EA8";
      sectionTagBackgroundColor = "#A1EBF0";
      containerBorder = "#D6FAFF";
      dateColor = "#34C4CD";
      bergerMenuColor = "#13DADA";
      HeaderColor = "#0B7076";
      descriptionColor = "#0B7076";
      BackgroundColor = "#E4FDFF";
      buttonColor = "#28A3B4";
      activeButtonColor = "#0DD4EF";
      activeImageSelectorColor = "#01F0FF";
      imageSelectorColor = "#18B8C2";
      break;
    }
    case "blue": {
      sectionTagColor = "#A1A9F0";
      sectionTagBackgroundColor = "#1E08A8";
      containerBorder = "#D6DAFF";
      dateColor = "#3443CD";
      bergerMenuColor = "#1713DA";
      HeaderColor = "#0D0B76";
      descriptionColor = "#0D0B76";
      BackgroundColor = "#E4E7FF";
      buttonColor = "#2B28B4";
      activeButtonColor = "#2C28FA";
      activeImageSelectorColor = "#201CFF";
      imageSelectorColor = "#2724A7";
      break;
    }
    case "magenta": {
      sectionTagColor = "#DCA1F0";
      sectionTagBackgroundColor = "#A80898";
      containerBorder = "#FED6FF";
      dateColor = "#CD34B5";
      bergerMenuColor = "#DA13BA";
      HeaderColor = "#760B5E";
      descriptionColor = "#760B5E";
      BackgroundColor = "#FAE4FF";
      buttonColor = "#B428AE";
      activeButtonColor = "#E826E0";
      activeImageSelectorColor = "#FF01C7";
      imageSelectorColor = "#B518C2";
      break;
    }
    case "grey": {
      sectionTagColor = "#464646";
      sectionTagBackgroundColor = "#E7E7E7";
      containerBorder = "#EFEFEF";
      dateColor = "#CACACA";
      bergerMenuColor = "#9E9E9E";
      HeaderColor = "#313131";
      descriptionColor = "#313131";
      BackgroundColor = "#F5F5F5";
      buttonColor = "#5C5C5C";
      activeButtonColor = "#484848";
      activeImageSelectorColor = "#D7D7D7";
      imageSelectorColor = "#BFBFBF";
      break;
    }
    default: {
      sectionTagColor = "#A88E08";
      sectionTagBackgroundColor = "#EEF0A1";
      containerBorder = "#F7F8CA";
      dateColor = "#CDCD34";
      bergerMenuColor = "#DABA13";
      HeaderColor = "#765E0B";
      descriptionColor = "#765E0B";
      BackgroundColor = "#FEFFDA";
      buttonColor = "#B1B428";
      activeButtonColor = "#F2EA1B";
      activeImageSelectorColor = "#FAFF01";
      imageSelectorColor = "#C2BC18";
      break;
    }
  }

  const noteStyles = StyleSheet.create({
    sectionTagColor: { color: sectionTagColor },
    sectionTagBackgroundColor: { backgroundColor: sectionTagBackgroundColor },
    dateColor: { color: dateColor },
    bergerMenuColor: { color: bergerMenuColor },
    HeaderColor: { color: HeaderColor },
    descriptionColor: { color: descriptionColor },
    BackgroundColor: { backgroundColor: BackgroundColor },
    containerBorder: { borderColor: containerBorder },
    buttonColor: { color: buttonColor },
    activeButtonColor: { color: activeButtonColor },
    activeImageSelectorColor: { color: activeImageSelectorColor },
    imageSelectorColor: { color: imageSelectorColor },
  });

  return noteStyles;
}

function _getSectionContainer(style) {
  let sectionTagColor, bergerMenuColor, BackgroundColor, containerBorder;
  switch (style) {
    case "yellow":
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#DABA13";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#F7F8CA";
        break;
      }
      case "red": {
        sectionTagColor = "#A82E08";
        containerBorder = "#FFD6D6";
        bergerMenuColor = "#DA3713";
        BackgroundColor = "#FFE4E4";
        break;
      }
      case "cyan": {
        sectionTagColor = "#089EA8";
        containerBorder = "#D6FAFF";
        bergerMenuColor = "#13DADA";
        BackgroundColor = "#E4FDFF";
        break;
      }
      case "blue": {
        sectionTagColor = "#A1A9F0";
        containerBorder = "#D6DAFF";
        bergerMenuColor = "#1713DA";
        BackgroundColor = "#E4E7FF";
        break;
      }
      case "magenta": {
        sectionTagColor = "#DCA1F0";
        containerBorder = "#FED6FF";
        bergerMenuColor = "#DA13BA";
        BackgroundColor = "#FAE4FF";
        break;
      }
      case "grey": {
        sectionTagColor = "#464646";
        containerBorder = "#EFEFEF";
        bergerMenuColor = "#9E9E9E";
        BackgroundColor = "#F5F5F5";
        break;
      }
    default:
      {
        sectionTagColor = "#C0AF17";
        bergerMenuColor = "#C0AF17";
        BackgroundColor = "#FDFFF2";
        containerBorder = "#C0AF17";
      }
      break;
  }

  const sectionStyles = StyleSheet.create({
    sectionTitle: { color: sectionTagColor },
    bergerMenuIcon: { color: bergerMenuColor },
    containerBackground: { backgroundColor: BackgroundColor },
    containerBorder: { borderColor: containerBorder, borderWidth: 2 },
  });

  return sectionStyles;
}

export { _getNoteContainerStyle, _getSectionContainer };
