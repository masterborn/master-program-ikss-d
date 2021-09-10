import PropTypes from "prop-types";
import styled from 'styled-components';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getMedias, getColor } from "@styles/utils";

const MissionWrapper = styled.section`
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding: 2em 8em;
`;

const TextWrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding: 4em;
`;

const StyledImage = styled.img`

width: 40%;
  object-fit: scale-down;

filter: drop-shadow(3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07)) drop-shadow(1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725)) drop-shadow(0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035)) drop-shadow(0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275));
border-radius: 16px;
`;

const Mission = ({ data }) => <MissionWrapper>
    <StyledImage src={data.image1.url} alt={data.title} />
    <TextWrapper>
        <h2>{data.title}</h2>
        {documentToReactComponents(data.text1)}
    </TextWrapper>
</MissionWrapper>


export default Mission;