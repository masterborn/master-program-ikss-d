import PropTypes from "prop-types";
import styled from 'styled-components';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getMedias } from "@styles/utils";

const MissionWrapper = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
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
        width: 658px;
        margin-left: 3.4em;

        @media (max-width: ${getMedias('laptop')}) {
        width: 483px;
        margin: 2em 0;

        }

        @media (max-width: 550px) {
            width: 327px;
        }

        @media (max-width: 360px) {
            width: 261px;
            margin: 0;
        }
`;

const StyledImage = styled.img`
width: 483px;
height: 245px;

filter: drop-shadow(3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07)) drop-shadow(1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725)) drop-shadow(0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035)) drop-shadow(0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275));
border-radius: 16px;

@media (max-width: 550px) {
    width: 327px;
    height: 201px;
    border-radius: 8px;
}

@media (max-width: 360px) {
    transform: scale(0.8);
}
`;

const Mission = ({ data }) => <MissionWrapper>
    <StyledImage src={data.image1.url} alt={data.title} />
    <TextWrapper>
        <h2>{data.title}</h2>
        {documentToReactComponents(data.text1)}
    </TextWrapper>
</MissionWrapper>

export default Mission;

Mission.propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
};