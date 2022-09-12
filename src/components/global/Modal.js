import React from 'react';

import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  @media screen and (min-width: 780px) {
    align-items: center;
  }
`;

const ModalMain = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  max-height: 100%;
  width: 100%;
  max-width: 760px;
  z-index: 2;
  @media screen and (min-width: 780px) {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  @media screen and (min-width: 780px) {
    border-radius: 8px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5rem 1rem 1rem 1.5rem;
  position: relative;
`;
const StyleH2 = styled.h2`
  margin: 0;
  padding-right: 3rem;
`;

const Content = styled.div`
  margin: 0;
  height: 75vh;
  max-height: 75vh;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const Modal = ({ title, children, onClose }) => (
  <ModalOverlay onClick={onClose}>
    <ModalMain>
      <FlexContainer>
        <Header>
          <StyleH2>{title}</StyleH2>
          <button type='button' className='btn btn-dark' onClick={onClose}>
            Close
          </button>
        </Header>
        <Content>{children}</Content>
      </FlexContainer>
    </ModalMain>
  </ModalOverlay>
);

export default Modal;
