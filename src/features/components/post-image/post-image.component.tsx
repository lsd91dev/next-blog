import path from "path";
import Image from "next/image";
import {FC} from "react";


interface Props {
    fileName: string;
}

export const PostImageComponent: FC<Props> = ({fileName}) => {

    const imagePath = (fileName: string) => {
        return path.join(__dirname, `imgs/cover/${fileName}.jpg`);
    }

    return <Image src={ imagePath(fileName) } objectFit="cover" alt='' layout="fill"/>


}

