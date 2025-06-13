import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${Colors.DUSTY_GREY};
    color: ${Colors.SNOW};
`;

export const HomeHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    background-color: ${Colors.STATE_GREY};
    margin-bottom: 10px;

    h1 {
        font-size: 24px;
        color: ${Colors.SNOW};
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 480px) {
        h1 {
            font-size: 20px;
        }
    }
`;

export const HomeHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    font-size: 18px;

    span {
        color: ${Colors.SNOW};
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: ${Colors.SNOW};
        font-size: 24px;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: ${Colors.LIQUID_LAVA};
        }
    }
`;