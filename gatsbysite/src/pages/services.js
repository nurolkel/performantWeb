import React from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaMobileAlt, FaSearchLocation, FaCashRegister, FaMailBulk, FaPaintBrush } from 'react-icons/fa';
import { AiFillSchedule } from "react-icons/ai";
import { MdVideoCall, MdDesignServices } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { breakpoints } from '../utils/breakpoints';
import SEO from '../components/SEO';

const RelativeContainer = styled.div`
  position: relative;
  margin-top: -1rem;
  padding-top: 5rem;
  height: 35vh;

  @media ${breakpoints.lg} {
    height: 45vh;
  }

  @media ${breakpoints.xl} {
    height: 100vh;
  }
`;

const HomeTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 3;
  width: 100%;
  h2,
  p {
    text-align: center;
    margin: 1rem;
    padding: 1rem 0;
  }
`;

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

const ImageContainer = styled.div`
  padding-top: 4rem;

`;




const MobileIcon = styled(FaMobileAlt)`
    color: var(--white);
    background: var(--light-green);
    border-radius: 20px;
    padding: 0.5rem;
    font-size: 3rem;
    margin: 1rem 0;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;

const SearchIcon = styled(FaSearchLocation)`
    color: var(--white);
    background: var(--light-green);
    border-radius: 20px;
    padding: 0.5rem;
    font-size: 3rem;
    margin: 1rem 0;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;

const CashIcon = styled(FaCashRegister)`
    color: var(--white);
    background: var(--light-green);
    border-radius: 20px;
    padding: 0.5rem;
    font-size: 3rem;
    margin: 1rem 0;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;

const MailIcon = styled(FaMailBulk)`
    color: var(--white);
    background: var(--light-green);
    border-radius: 20px;
    padding: 0.5rem;
    font-size: 3rem;
    margin: 1rem 0;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;
const ScheduleIcon = styled(AiFillSchedule)`
    color: var(--light-green);
    font-size: 4rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;
const VideoIcon = styled(MdVideoCall)`
    color: var(--light-green);
    font-size: 4rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;
const DesignIcon = styled(MdDesignServices)`
    color: var(--light-green);
    font-size: 4rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;
const PaintIcon = styled(FaPaintBrush)`
    color: var(--light-green);
    font-size: 4rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
`;
const WebsiteIcon = styled(CgWebsite)`
    color: var(--light-green);
    font-size: 4rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }
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
`;

const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 2rem;
    li {
        list-style: none;
        margin: 1rem;
        h3{
            text-align: center;
            font-size: 2rem;
        }
        p {
            text-align: center;
            font-size: 1.5rem;
        }
    }
`;


const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;



const WorkStyleContainer = styled.div`
    div {
        text-align: center;
        margin: 1rem;
        padding: 1rem 0;
    }
`;

const FrontDifferenceContainer = styled.div`
    background-color: #04bfad;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2304ccb8' fill-opacity='1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
    width: 100%;
    position: relative;
    padding: 2rem 0;
    h3 {
        text-transform: capitalize;
        color: var(--white);
        text-align: center;
        padding: 2rem 0;
    }
`;

const TextContainer = styled.div`
    p, a{
        text-transform: capitalize;
        margin: 1rem 0;
        padding: 1rem 0;
        color: var(--white);
        font-size: 1.75rem;
        text-align: center;
    }
    a {
        display: block;
    }
`;

const GreyContainer = styled.div`
    position: relative;
    background-color: var(--light-grey);
    padding: 3rem 0;
    h3, p {
        color: var(--black);
        margin: 1rem;
        text-align: center;
        padding: 2rem 0;
    }
`;



const servicesPage = () => {
    return ( 
        <>
            <SEO title={`Fast and Affordable Websites`} />
            <RelativeContainer>
                <ImageContainer>
                    <StaticImage 
                        src="../images/logisticsDesign.png"
                        alt="Logistics Webpage"
                        placeholder="tracedSVG"
                        layout="fullWidth"
                        height={600}
                    />
                </ImageContainer>
                <StyledHome>
                    <HomeTextContainer>
                        <h2>Services</h2>
                        <p>Is your website working as hard as you are?</p>
                        <p>Let us help you with a strategic web marketing strategy</p>
                    </HomeTextContainer>
                </StyledHome>
            </RelativeContainer>
            <HeadingContainer>
                <h2>What We do for you</h2>
            </HeadingContainer>
            <ListContainer>
                <li>
                    <h3>Business Marketing Page</h3>
                    <p>No matter the type of business you run, your business needs a website to be found and trusted by propective customers</p>
                    <IconContainer>
                        <MobileIcon />
                    </IconContainer>
                </li>
                <li>
                    <h3>Ecommerce Page</h3>
                    <p>We can make an exceptional web commerce experience so that your customers don't just visit your page, they start buying more</p>
                    <IconContainer>
                        <CashIcon />
                    </IconContainer>
                </li>
                <li>
                    <h3>SEO</h3>
                    <p>SEO is key to making a successful webpage versus a non-successful webpage. SEO is constanly changing and your website needs to change with it. We use the latest web development technology so that your search index and lighthouse scores rate high</p>
                    <IconContainer>
                        <SearchIcon />
                    </IconContainer>
                </li>
                <li>
                    <h3>Digital Marketing</h3>
                    <p>Customer enagement and awareness is what will drive your brand to the next level. Our primary growth hacks are using email marketing, campaigns, and keyword advertising</p>
                    <IconContainer>
                        <MailIcon />
                    </IconContainer>
                </li>
            </ListContainer>
            <FrontDifferenceContainer>
            <h3>
                You Already Have A Lot On Your Plate
            </h3>
            <TextContainer>
                <p>Let us be your website provider</p>
            </TextContainer>
        </FrontDifferenceContainer>
        <HeadingContainer>
            <h2>How we work</h2>
        </HeadingContainer>
        <WorkStyleContainer>
            <div>
                <p>Schedule a Call</p>
                <ScheduleIcon />
            </div>
            <div>
                <p>Speak about your business goals and current website challanges</p>
                <VideoIcon />
            </div>
            <div>
                <p>First Mock-up design</p>
                <DesignIcon />
            </div>
            <div>
                <p>Finishing Touches Before Final Release</p>
                <PaintIcon />
            </div>
            <div>
                <p>Congratulations, your business website is now able to be viewed by the world!</p>
                <WebsiteIcon />
            </div>
        </WorkStyleContainer>
        <GreyContainer>
                <h3>Already Have a Website?</h3>
                <p>Contact Us so that we may review your current website</p>
                <p>Google's Search Index and Lighthouse scores matter</p>
        </GreyContainer>
        <FrontDifferenceContainer>
            <h3>Pricing?</h3>
            <TextContainer>
                <Link to="/contact">Get Started Here</Link>
            </TextContainer>
        </FrontDifferenceContainer>
        </>
    )
}

export default servicesPage;