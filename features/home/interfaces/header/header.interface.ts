import { ImageSourcePropType } from "react-native";

export interface SlideItemProps {
  id: number;
  text1: string;
  text2: string;
  text3?: string;
  buttonText: string;
  width?: number;
  imgSource: ImageSourcePropType | undefined;
  isActive?: boolean;
}
