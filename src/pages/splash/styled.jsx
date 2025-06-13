import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const SplashContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding: 0 20px;
    color: ${Colors.SNOW};
    row-gap: 20px;
`;

export const SplashImage = styled.img`
    max-width: 20%;
    height: auto;
    object-fit: cover;
    margin: 20px auto;

    @media screen and (max-width: 768px) {
        max-width: 50%;
        height: auto;
    }
`;
