import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
    height: 100vh;
    color: ${Colors.SNOW};
`;

export const Title = styled.h1`
    font-size: 1.5;
`;

export const Subtitle = styled.h2`
    font-size: 1rem;
`;

export const Img = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 20px;
`;