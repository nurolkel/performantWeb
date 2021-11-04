import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { breakpoints } from '../utils/breakpoints'
import ServiceFront from "../components/FrontServices";
import PortfolioSection from "../components/PortfolioSection";
import FrontDiffernce from "../components/FrontDifference";
import ContactFront from "../components/ContactFront";
import SEO from "../components/SEO";

const StyledHome = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: var(--black-tint);
  height: 100%;
  width: 100%;
  margin-left: 0;
  
`;

const HomeTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 3;
  width: 100%;
  h1,
  p {
    text-align: center;
  }

  @media ${breakpoints.lg} {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 2.5rem;
    }
  }

`;

const RelativeContainer = styled.div`
  position: relative;
  margin-top: -1rem;
  padding-top: 5rem;
  height: 55vh;

  @media ${breakpoints.lg} {
    height: 55vh;
  }

  @media ${breakpoints.xl} {
    height: 110vh;
  }
`;

const ButtonLink = styled.button`
  border-radius: 30px;
  background: #027373;
  white-space: nowrap;
  font-size: 1.5rem;
  --cast: 2px;
  box-shadow: var(--cast) var(--cast) 0 rgba(2,115,115,.45);
  text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
  transition: all 0.2s;
  &:hover {
    --cast: 4px;
    }

    a {
      text-decoration: none;
      color: var(--white);
    }

    @media ${breakpoints.lg} {
      a {
        font-size: 2rem;
      }
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

const ImageContainer = styled.div`
  padding-top: 4rem;
  height: 75%;
`;

export default function IndexPage()  {
  return (
    <>
      <SEO title={`Performant Web Design -Home Page`} />
      <RelativeContainer>
      <ImageContainer>
        <StaticImage
              src="../images/picturesWeb.png"
              alt="Slicks Slices WEbsite Example"
              placeholder="traceSVG"
              layout="fullWidth"
              height={600} 
            />
        </ImageContainer>
        <StyledHome>
          <HomeTextContainer>
            <h1>Performant Web Design</h1>
            <p>Start getting the results you need from your website</p>
            <ButtonContainer>
              <ButtonLink>
                <Link to='/contact'>
                  Have a Project in Mind?
                </Link>
              </ButtonLink>
            </ButtonContainer>
          </HomeTextContainer>
        </StyledHome>  
      </RelativeContainer>
      <FrontDiffernce />
      <ServiceFront />
      <PortfolioSection />
      <ContactFront />
    </>
  )
}

