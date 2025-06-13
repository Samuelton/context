import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: ${Colors.SNOW};
    row-gap: 20px;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
`;

export const LoginImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
`;