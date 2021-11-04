import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../utils/breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    h2 {
        color: var(--light-grey);
        text-transform: capitalize;
        text-decoration: underline var(--light-green);
    }

    @media ${breakpoints.lg} {
        font-size: 3.3rem;
    }
`;



const MessageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: var(--light-green);
    padding: 1rem 0;
    h3 {
        text-align: center;
        color: var(--white);
        
    }
    p {
        color: var(--white);
        margin: 2rem 1rem;
        text-align: center;
        line-height: 25px;
    }
`;



const RelativeCard = styled.div`
    position: relative;
    border: 0.5rem solid var(--light-green);
    margin: 1rem;
    box-shadow: 0 0.2rem 0 0.2rem var(--light-green-tint);
    p, h3 {
        text-align: center;
        padding: 0.5rem 0;
    }
`;

const ImageContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const aboutPage = () => {
    return ( 
        <>
            <SEO title={`Performant Web Design- About Us`} />
            <HeadingContainer>
                <h2>About</h2>
            </HeadingContainer>
            <MessageContainer>
                    <h3>Our Mission Statement</h3>
                    <p>In March 2020, our world completely changed due to the Corona Virus. And in that time, many small and medium size businesses had to close their doors because they weren't essential and yet the biggest and most profitable business not only were able to stay open, but they thrived. Small and Medium size business were no longer competing in the same game. We feel that incorporating technology in your business can even the playing game and get you back in the global competitve marketplace.</p>
            </MessageContainer>
            <HeadingContainer>
                <h2>
                    Our Team
                </h2>
            </HeadingContainer>
            <RelativeCard>
                <ImageContainer>
                    <StaticImage 
                        src="../images/kelvinheadshotl.jpg"
                        alt="Kelvin Nunez"
                        placeholder="tracedSVG"
                        layout="constrained"
                        width={200}
                        height={200}
                    />
                </ImageContainer>
                <h3>Kelvin Nunez</h3>
                <p>CEO, President, Web Developer</p>
                <p>Kelvin Started coding in 2020 to be able to learn how technology really works and how it can benefit people. He's worked in sales as a car salesman and a business to business consultant. The move to web developer came as a suprise and he is currently loving his choice.</p>
                <p>On his free time, Kelvin enjoys going to the gym, reading, exploring musuems, and hanging out with friends. One of his personal goals is to travel more and learn about other countries and cultures.</p>
            </RelativeCard>
        </>
    )
}

export default aboutPage;