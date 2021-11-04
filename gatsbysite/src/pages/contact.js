import React from 'react';
import styled from 'styled-components';
import useForm from '../utils/useForm';
import useSubmit from '../utils/useSubmit';
import Loading from '../components/Loading';
import { MdOutlineEmail } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import SEO from '../components/SEO';


const MobileIcon = styled(FaMobileAlt)`
    color: var(--light-green);
    font-size: 2rem;
    display: inline-block;
    margin: 0 0.5rem;
`;
const EmailIcon = styled(MdOutlineEmail)`
    color: var(--light-green);
    font-size: 2rem;
    display: inline-block;
    margin: 0 0.5rem;
`;

const PageHeadingComponent = styled.div`
    padding: 2rem 0;
    margin: 1rem;
    h1 {
        text-align: center;
    }
`;

const FormSection = styled.div`

`;

const TextSection = styled.div`
    h3 {
        text-align: center;
    }
    p {
        font-size: 1.3rem;
        margin: 1rem;
        padding: 1rem 0;
        line-height: 1.80rem;
    }
    a {
        display: block;
        color: var(--light-grey);
        text-decoration: none;
        font-size: 1.2rem;
        padding: 1rem 0;
        margin: 1rem;
    }
`;

const FormInput = styled.form`
    display: grid;
    grid-template-column: 1fr 1fr;
    margin: 1rem;
    gap: 30px;
    box-sizing: border-box;
    .mapleSyrup {
        display: none;
    }
    legend {
        text-align: center;
    }
    fieldset {
        display: grid;
        label {
            font-size: 1.7rem;
        }
        input, textarea {
            padding: 0.8rem 0;
            border: none;
            border-bottom: 1px solid var(--dark-grey);
            background-color: var(--black);
            margin: 1.5rem 0;
            color: var(--light-grey);
            box-shadow: 1px 1px 0 var(--light-grey);
            &:focus, &:hover {
                border: 2px solid var(--light-green);
                outline: none;
            }
        }
        textarea {
            color: var(--light-grey);
        }
    }
`;

    

export default function ContactPage() {

    const { values, updateValue } = useForm({
        name:'',
        companyName: '',
        email:'',
        mapleSyrup:'',
        phoneNumber:'',
        description:'',
    })

    const { submitForm, error, message, loading } = useSubmit({values})

    if (message) {
        return <p>{message}</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (loading) {
        return <Loading />
    }

    return ( 
        <>
            <SEO title={`Performant Web Design- Contact Us`} />
            <PageHeadingComponent>
                <h1>Speak To Us</h1>
            </PageHeadingComponent>
            <FormSection>
                <TextSection>
                    <h3>Performant Web Design</h3>
                    <p>Performance First Website Designers</p>
                    <p>Fill the form and let us know what challanges you are facing if you have a website right now and what you want your website to represent</p>
                    <a href="mailto:knunezweb@gmail.com">
                        <EmailIcon />knunezweb@gmail.com
                    </a>
                    <a href="tel:13472379288">
                        <MobileIcon />(347)237-9288
                    </a>
                </TextSection>
                <FormInput onSubmit={submitForm}>
                    <fieldset disabled={loading}>
                        <legend>
                            <h3>
                                Let's Talk!
                            </h3>
                        </legend>
                        <label htmlFor="name">Name :</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={updateValue}
                        />
                        <label htmlFor="companyName">Company Name :</label>
                        <input 
                            type="text"
                            name="companyName"
                            id="companyName"
                            value={values.companyName}
                            onChange={updateValue}
                            />
                        <label htmlFor="email">Email :</label>
                        <input 
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={updateValue}
                        />
                        <input 
                            type="mapleSyrup"
                            name="mapleSyrup"
                            id="mapleSyrup"
                            value={values.mapleSyrup}
                            onChange={updateValue}
                            className="mapleSyrup"
                        />
                        <label htmlFor="phoneNumber">Phone Number :</label>
                        <input 
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={values.phoneNumber}
                            onChange={updateValue}
                        />
                        <label htmlFor="description">Tell us what is it you want to do :</label>
                        <textarea 
                            value={values.description}
                            onChange={updateValue}
                            id="description"
                            name="description"
                            cols={15}
                            rows={6}
                        />
                    </fieldset>
                    <fieldset>
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                    </fieldset>
                </FormInput>
            </FormSection>
        </>
    )
}

