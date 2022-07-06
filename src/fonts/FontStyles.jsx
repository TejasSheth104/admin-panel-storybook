import { createGlobalStyle } from 'styled-components';
import SofiaProBlack from './SofiaPro-Black.otf';
import SofiaProBold from './SofiaPro-Bold.otf';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Sofia Pro';
        src: url(${SofiaProBlack}) format('otf'),
            url(${SofiaProBold}) format('otf');
    }
`;

// export default FontStyles;
