import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const getPercentageWidth = (percentage) => {
    return `${(windowWidth * percentage) / windowWidth}%`;
};

export default getPercentageWidth;
