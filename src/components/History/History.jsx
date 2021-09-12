import PropTypes from "prop-types";
import styled from 'styled-components';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getMedias } from "@styles/utils";

const HistoryWrapper = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 6em 2em;

        & h2 {
            margin-bottom: 0.5em;
        }

        @media (max-width: ${getMedias('laptop')}) {
            flex-direction: column;
            font-size: 14px;
            line-height: 28px;
            margin: 2em;

            & h2 {
                font-weight: 800;
                font-size: 24px;
                line-height: 32px;
                margin-top: 0.5em;
            }
        }
`;

const TextWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 658px;
        margin-bottom: 2em;

        @media (max-width: 1280px) {
        width: 483px;
        }

        @media (max-width: ${getMedias('laptop')}) {
        width: 483px;
        margin: 2em 0;

        }

        @media (max-width: 550px) {
            width: 327px;
        }

        @media (max-width: 360px) {
            width: 261px;
            margin: 2em;
        }
`;

const TextWrapper2 = styled(TextWrapper)`
    & * {
        
        margin-bottom: 2em;
        text-indent: 2em;
    }
`;

const StyledImage = styled.img`
width: 483px;
height: 352px;
margin-left: 3em;

filter: drop-shadow(3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07)) drop-shadow(1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725)) drop-shadow(0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035)) drop-shadow(0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275));
border-radius: 16px;

@media (max-width: 1280px) {
        transform: scale(0.9);
        margin: 0;
}

@media (max-width: 550px) {
    width: 327px;
    height: 238px;
    border-radius: 8px;
}

@media (max-width: 360px) {
    transform: scale(0.8);
}
`;

const StyledImage2 = styled(StyledImage)`
width: 483px;
height: 265px;
margin-top: 2em;

@media (max-width: 550px) {
    width: 327px;
    height: 190px;
}
`;

const ArticleWrapper = styled.article`
    display: flex;
    flex-direction: row-reverse;

    @media (max-width: ${getMedias('laptop')}) {
        flex-direction: column;
    }
`;

const History = ({ data }) => <HistoryWrapper>
    <ArticleWrapper>
    <StyledImage src={data.image1.url} alt={data.title} />
    <TextWrapper>
        <h2>{data.title}</h2>
        {documentToReactComponents(data.text1)}
    </TextWrapper>
    </ArticleWrapper>
    <ArticleWrapper>
    <StyledImage2 src={data.image2.url} alt={data.title} />
    <TextWrapper2>
        {documentToReactComponents(data.text2)}
    </TextWrapper2>
    </ArticleWrapper>
</HistoryWrapper>

export default History;

History.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
};