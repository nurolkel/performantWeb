import React from "react";
import styled from "styled-components";
import  { breakpoints }  from '../utils/breakpoints.js';
import { FaMobileAlt, FaSearchLocation, FaCashRegister, FaMailBulk} from 'react-icons/fa'
import { Link } from 'gatsby';

const MobileIcon = styled(FaMobileAlt)`
    color: #fff;
    background: #04BFAD;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 4rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`

const SearchIcon = styled(FaSearchLocation)`
    color: #fff;
    background: #04BFAD;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 4rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`;

const CashIcon = styled(FaCashRegister)`
    color: #fff;
    background: #04BFAD;
    margin-left: 0.5rem;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 4rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`;

const MailIcon = styled(FaMailBulk)`
    color: #fff;
    background: #04BFAD;
    margin-bottom: -3rem;
    border-radius: 20px;
    padding: 2px;
    margin-left: 0.5rem;
    font-size: 2.5rem;
    transition: transform 300ms;
    :hover {
        transform: translateY(-10px);
    }

    @media ${breakpoints.lg} {
        font-size: 4rem;
        height: 80px;
        width: 75px;
        padding: 10px;
        margin-left: 0;
        margin: 0 auto;

    }
`;

const ServiceFrontContainer = styled.div`
    width: 100%;
    margin: 1.5rem 0;
    box-sizing: border-box;

     @media ${breakpoints.lg} {
         height: 750px;
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

    @media ${breakpoints.lg} {
        font-size: 3.3rem;
    }
`;

const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 2rem;
    height: 80%;
    li {
        list-style: none;

        h3{
            text-align: center;
            font-size: 2rem;
            text-transform: capitalize;
            margin-left: 2.8rem;
        }
        p {
            text-align: center;
            font-size: 1.5rem;
        }
        
        @media ${breakpoints.lg} {
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
            justify-content: center;

            h3 {
                font-size: 3rem;
                margin: 1rem 0;
                margin-top: 2rem;
            }

            p {
               font-size: 2rem;
               margin: 1rem 0;
            }
        }
      
    }

    @media  ${breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${breakpoints.lg} {
        margin: 2rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media ${breakpoints.lg} {
        font-size: 2.3rem;
        margin-bottom: 2rem;
    }
`;



const ServiceFront = () => {
    return ( 
        <ServiceFrontContainer>
            <HeadingContainer>
                <h2>What we offer</h2>
            </HeadingContainer>
            <ListContainer>
                <li>
                    <MobileIcon aria-label="Business Marketing Icon"/>
                    <h3>Business Marketing Page</h3>
                    <p>Mobile First Design Web Design style and accessible for all to increase your business marketability</p>
                </li>
                <li>
                    <CashIcon aria-label="E-Commerce Icon" />
                    <h3>E-Commerce Web Applications</h3>
                    <p>Sell your products online and enchance your customers web experience with a performant user interface</p>
                </li>
                <li>
                    <SearchIcon aria-label="SEO Icon" />
                    <h3>SEO</h3>
                    <p>Optimize your search results and have your page work as hard as you do</p>
                </li>
                <li>
                    <MailIcon aria-label="Digital Marketing Icon" />
                    <h3>Digital Marketing</h3>
                    <p>Communicate with your customers directly through direct emails, text messages and advertisment</p>
                </li>
            </ListContainer>
            <ButtonContainer>
                <Link to="/services">
                    <button>
                        Find Out More
                    </button>
                </Link>
            </ButtonContainer>
        </ServiceFrontContainer>
    )
}

export default ServiceFront;