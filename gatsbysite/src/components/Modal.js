import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Portal from '../../Portal';
import styled from 'styled-components';

const ModalOuter = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--light-grey-tint);
    z-index: 100;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

const ModalBox = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: 60%;
    box-shadow: 0 0 10px rgba(0,0,0,.25);
    z-index: 101;
    overflow-y: auto;
    padding: 2rem;
    background: var(--black);
`;

const ModalButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;


const Modal = forwardRef((props, ref) => {

    const [display, setDisplay] = useState(false);

    useImperativeHandle(
        ref,
        () => {
            return {
                openModal: () => handleOpen(),
                closeModal: () => handleClose(),
            }
        }
    )

    const handleOpen = () => {
        setDisplay(true);
    }
    
    const handleClose = () => {
        setDisplay(false);
    }

    if (display) {
        return ( 
            <Portal>
                <ModalWrapper>
                    <ModalOuter onClick={handleClose} />
                    <ModalBox className="modal-container">
                        {props.children}
                        <ModalButtonContainer>
                            <button onClick={handleClose}>Close</button>
                        </ModalButtonContainer>
                    </ModalBox>
                </ModalWrapper>
            </Portal>
        )
    }
    return null;
})

export default Modal;