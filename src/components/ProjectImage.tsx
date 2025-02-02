import { FC, useCallback } from 'react';

interface ImageProps {
    imageUrl: string,
    title: string
}

export const ProjectImage: FC<ImageProps> = ({
    imageUrl = "",
    title = ""
}) => {

    return (
        <div className='img-holder' style={{backgroundImage: `url(${imageUrl})`}}>
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};
