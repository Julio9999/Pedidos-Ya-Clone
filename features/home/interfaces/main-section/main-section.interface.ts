import { ImageSourcePropType } from "react-native";

export interface CommonSliderItemProps {
    id: number;
    title: string;
    width?: number;
    imgSource: ImageSourcePropType | undefined;
}