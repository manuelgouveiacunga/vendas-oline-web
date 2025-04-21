import styled from 'styled-components';

export const ContainerLoginScreem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  filter: blur(10px);
`;
export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 100%;
  height: 100vh;
  max-width: 646px;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
`;
