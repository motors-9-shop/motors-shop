import { createGlobalStyle } from "styled-components";

const GlobalSyle = createGlobalStyle`
    :root {
        /* Brand Scale */    

        --brand-1: #4529E6;
        --brand-2: #5126EA;
        --brand-3: #B0A6F0;
        --brand-4: #EDEAFD;

        /* Grey Scale */

        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4DA;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;

        --white-fixed: #FFFFFF;

        /* Feedback */
        
        --alert-1: #CD2B31;
        --alert-2: #FDD8D8;
        --alert-3: #FFE5E5;

        --sucess-1: #FFE5E5;
        --sucess-2: #CCEBD7;
        --sucess-3: #DDF3E4;

        /* Colors Random Profile */

        --random-1: #E34D8C;
        --random-2: #C04277;
        --random-3: #7D2A4D;
        --random-4: #7000FF;
        --random-5: #6200E3;
        --random-6: #36007D;
        --random-7: #349974;
        --random-8: #2A7D5F;
        --random-9: #153D2E;
        --random-10: #6100FF;
        --random-11: #5700E3;
        --random-12: #30007D;

        /* Fonts Family */

        --font-primary: 'Lexend', sans-serif;
        --font-secondary:'Inter', sans-serif;

        /* Typography */
        
        --heading-1-700: 700 42px var(--font-primary);

        --heading-2-600: 600 36px var(--font-primary);

        --heading-3-600: 600 32px var(--font-primary);
        --heading-3-500: 500 32px var(--font-primary);

        --heading-4-600: 600 28px var(--font-primary);
        --heading-4-500: 500 28px var(--font-primary);

        --heading-5-600: 600 24px var(--font-primary);
        --heading-5-500: 500 24px var(--font-primary);

        --heading-6-600: 600 20px var(--font-primary);
        --heading-6-500: 500 20px var(--font-primary);

        --heading-7-600: 600 16px var(--font-primary);
        --heading-7-500: 500 16px var(--font-primary);

        --body-1-400: 400 16px var(--font-secondary);
        --body-1-600: 600 16px var(--font-secondary);

        --body-2-400: 400 14px var(--font-secondary);
        --body-2-500: 500 14px var(--font-secondary);

        --button-big-text: 600 16px var(--font-secondary);
        --button-medium-text: 600 14px var(--font-secondary);

        --input-placeholder: 400 16px var(--font-secondary);
        --input-label: 400 16px var(--font-secondary);
    }
`

export default GlobalSyle