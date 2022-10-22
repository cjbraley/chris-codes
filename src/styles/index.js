import { createGlobalStyle } from "styled-components";
// import reset from 'styled-reset'

const Global = createGlobalStyle`



    // normalise
    html {
        height: 100%;
        scroll-behavior: smooth;
        -webkit-tap-highlight-color: transparent;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }


    ul {
        list-style: disc;
        padding-left: 1.25rem;
    }

    button {
        background-color: transparent;
        border-width: 0;
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 0;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${props => props.theme.color.fontDark};
        background-color: ${props => props.theme.color.backgroundLight};

        &.no-scroll {
            overflow: hidden;
        }
    }


    // fonts
      
    h1 {
        font-family: ${props => props.theme.font.family.primary}, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: ${props => props.theme.font.size.mobile.xxxl};
    }

    h2 {
        font-family: ${props => props.theme.font.family.primary}, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.theme.font.size.mobile.xxl};
    }

    h3 {
        font-family: ${props => props.theme.font.family.primary}, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.theme.font.size.mobile.xl};
    }

    h4{
        font-family: ${props => props.theme.font.family.primary}, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.theme.font.size.mobile.l};
    }

    h5{
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.theme.font.size.mobile.m};
    }

    h6{
        font-family: ${props => props.theme.font.family.primary}, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.theme.font.size.mobile.s};
    }

    
    p {
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: ${props => props.theme.font.size.mobile.m};
        line-height: 132.5%;
    }

    .text--large{
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: ${props => props.theme.font.size.mobile.l};
        line-height: 140%;
    } 

    .text--small {
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: ${props => props.theme.font.size.mobile.s};
        line-height: 132.5%;
    }

    .text--link {
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: ${props => props.theme.font.size.mobile.m};
        line-height: 132.5%;
        text-decoration: none;
    }


    .text--footnote {
        font-family: ${props => props.theme.font.family.secondary}, sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: ${props => props.theme.font.size.mobile.xs};
        line-height: 132.5%;
    }

    .text--button {
        font-family: ${props => props.theme.font.family.primary}, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: ${props => props.theme.font.size.mobile.s};
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        line-height: 100%;
    }

    // general

    .anchor {
        display: block;
        position: relative;
        top: calc(-${props => props.theme.position.navHeight} - 3.25rem);
        visibility: hidden;
    }

    .content {
        max-width: 34rem;
        margin-left: auto;
        margin-right: auto;

        padding-left: ${props => props.theme.spacing.l};
        padding-right: ${props => props.theme.spacing.l};
    }

    .page-section {
        padding-top: ${props => props.theme.spacing.xl};
        padding-bottom: ${props => props.theme.spacing.xl};

        &__header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: ${props => props.theme.spacing.xs};
            margin-bottom: ${props => props.theme.spacing.l};

            &__subtitle {
                color: ${props => props.theme.color.fontMedium};
            }
        }
    }



    .line-vertical {
        opacity: 50%;
        width: ${props => props.theme.line.dashWidth}px;

        /*Vertical*/
        background-image: linear-gradient(
            ${props => props.theme.color.fontSubtle}
                ${props => (props.theme.line.dashLength / props.theme.line.dashTotal) * 100}%,
            rgba(255, 255, 255, 0) 0%
        );
        background-position: 0 ${props => props.theme.line.dashWidth}px;
        background-size: ${props => props.theme.line.dashWidth}px
            ${props => props.theme.line.dashTotal}px;
        background-repeat: repeat-y;
        transform: translateX(-50%);
    }

    .line-horizontal {
        opacity: 50%;
        height: ${props => props.theme.line.dashWidth}px;
        background-image: linear-gradient(
            to right,
            ${props => props.theme.color.fontSubtle} 80%,
            rgba(255, 255, 255, 0) 0%
        );
        background-position: 0px 0px;
        background-size: 0.75rem 2px; // stroke + gap width | height: ;
        background-repeat: repeat-x;
    }



    @media (min-width: ${props => props.theme.breakpoint.tablet}px) {


        
    }
    
    @media (min-width: ${props => props.theme.breakpoint.desktop}px) {

            // fonts
      
        h1 {
            font-size: ${props => props.theme.font.size.desktop.xxxl};
        }

        h2 {
            font-size: ${props => props.theme.font.size.desktop.xxl};
        }

        h3 {
            font-size: ${props => props.theme.font.size.desktop.xl};
        }

        h4{
            font-size: ${props => props.theme.font.size.desktop.l};
        }

        h5{
            font-size: 1.125rem;
        }

        h6{
            font-size: ${props => props.theme.font.size.desktop.s};
        }

        
        p {
            font-size: ${props => props.theme.font.size.desktop.m};
        }

        .text--large{
            font-size: ${props => props.theme.font.size.desktop.l};
        } 

        .text--small {
            font-size: ${props => props.theme.font.size.desktop.m};
        }

        .text--link {
            font-size: ${props => props.theme.font.size.desktop.m};
        }


        .text--footnote {
            font-size: ${props => props.theme.font.size.desktop.m};
        }

        .text--button {
            font-size: ${props => props.theme.font.size.desktop.m};
        }

        .content {   
            max-width: 1200px;
        }

    }

    


  
`;

export default Global;
