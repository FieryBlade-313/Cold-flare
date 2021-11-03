import { useState } from 'react';
import {
    HeaderBarBlock,
    TextContentBlock,
    TextAndImageBlock,
    BgVideoBlock,
    ButtonBlock,
} from './componentBlock'

import {
    ContactModal
} from './component';

const Home = ({ isSmall, width, height }) => {

    const [isOpen, modalOpenState] = useState(false);

    return (
        <div className="homeMain">
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <TextContentBlock isSmall={isSmall} width={width} height={height} />
            <TextAndImageBlock isSmall={isSmall} width={width} height={height} />
            <ButtonBlock modalOpenState={modalOpenState} />
            <BgVideoBlock />
            {isOpen && <ContactModal modalOpenState={modalOpenState} />}
        </div>
    );
}

export default Home;