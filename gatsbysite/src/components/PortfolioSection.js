import React, { useRef } from 'react';
import Modal from './Modal';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../utils/breakpoints';
import styled from 'styled-components';

const ButtonLink = styled.button`
  width: 10rem;
  padding:0;
  box-shadow: none;
  margin: 0;
`;

const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    h2 {
        color: var(--light-grey);
        text-transform: capitalize;
        text-decoration: underline var(--light-green);
    }

    @media ${breakpoints.lg} {
        font-size: 3.7rem;
    }
`;

const ImageBlock = styled.div`
    width: 100%;
`;

const PortfolioContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem;
    height: 80%;
`;

const Wrapper = styled.div`
    height: 300px;
    margin: 2rem 0;

    @media ${breakpoints.lg} {
        padding: 2rem 0;
        margin-top: 3rem;
    }
`;



export default function PortfolioSection() {
    const nuCampRef = useRef();
    const movieRef = useRef();
    const logisticsRef = useRef();

    return ( 
        <Wrapper>
            <HeadingContainer>
                <h2>Recent Projects</h2>
            </HeadingContainer>
            <PortfolioContainer>
                <ButtonLink onClick={ () => nuCampRef.current.openModal() }>
                    <ImageBlock aria-label="NuCamp Website Example">
                        <StaticImage 
                            src='../images/nuCamp.png'
                            placeholder="tracedSVG"
                            layout="constrained"
                            alt="Nucamp Website Example"
                        />
                    </ImageBlock>
                </ButtonLink>
                <Modal ref={nuCampRef}>
                    <StaticImage 
                        src='../images/nuCamp.png'
                        placeholder="tracedSVG"
                        layout="fullWidth"
                        alt="Nucamp Website Example"
                    />
                </Modal>
                <ButtonLink onClick={ () => movieRef.current.openModal() }>
                    <ImageBlock aria-label="React Movie Website Example">
                        <StaticImage 
                            src='../images/reactMovieDB.png'
                            placeholder="tracedSVG"
                            layout="constrained"
                            alt="React Website Example"
                        />
                    </ImageBlock>
                </ButtonLink>
                <Modal ref={movieRef}>
                    <StaticImage 
                        src='../images/reactMovieDB.png'
                        placeholder="tracedSVG"
                        layout="fullWidth"
                        alt="Nucamp Website Example"
                    />
                </Modal>
                <ButtonLink onClick={ () => logisticsRef.current.openModal() }>
                    <ImageBlock aria-label="Logistics Website Example">
                        <StaticImage 
                            src='../images/logisticsWeb.png'
                            placeholder="tracedSVG"
                            layout="constrained"
                            alt="Logistics Website Example"
                        />
                    </ImageBlock>
                </ButtonLink>
                <Modal ref={logisticsRef}>
                    <StaticImage 
                        src='../images/logisticsWeb.png'
                        placeholder="tracedSVG"
                        layout="fullWidth"
                        alt="Nucamp Website Example"
                    />
                </Modal>
            </PortfolioContainer>
        </Wrapper>
    )
}