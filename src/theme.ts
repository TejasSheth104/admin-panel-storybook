import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
     @font-face {
        font-family: 'SofiaPro';
        font-style: normal;
        font-weight: 400;
        src: url("assets/fonts/Sofia_Pro/SofiaProRegularAz.otf") format('opentype');
    }

    @font-face {
        font-family: 'SofiaPro';
        font-style: normal;
        font-weight: 500;
        src: url("assets/fonts/Sofia_Pro/SofiaProMediumAz.otf") format('opentype');
    }

    :root {
        --brand-font-family: "SofiaPro", sans-serif
    }

    button {
        font-family: "SofiaPro", sans-serif;
    }
    
    input {
        font-family: "SofiaPro", sans-serif;
    }
`;

export default Theme;
