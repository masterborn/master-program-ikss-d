import styled from "styled-components";

import Button from "@components/Button/Button";
import { getColor, getMedias } from '@styles/utils';

const Wrapper = styled.div`
background: ${getColor('blue_10')};
border-radius: 16px;
width: 1200px;
height: 352px;
margin-bottom: 1em;

& h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: -0.015em;
    margin: 0 auto 2em;
    padding-top: 3em;
}

& button {
    margin: auto;
}

@media (max-width: ${getMedias('desktop')}) { 
    width: auto;
    height: 220px;
    padding: 56px 31px;
    margin: 0 2em 2em;

    & h3 {
        font-size: 18px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.015em;
        padding-top: 0;
    }

    & button {
        width: 175px;
        height: 36px;
        padding: 9px 16px;

        & * {
            font-size: 14px;
            line-height: 18px;
        }
    }
 }
`;

const ContactBanner = () => <Wrapper>
<h3>Chcesz zorganizować z nami podobny projekt?</h3>
<Button>
    <span>Skontaktuj się z nami</span>
</Button>
</Wrapper>

export default ContactBanner;