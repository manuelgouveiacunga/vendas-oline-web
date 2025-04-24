import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

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
export const LogoImage = styled.img`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
`;

export const TitleLogin = styled(Title)`
  color: #006397;
  align-self: center;
  margin: 65px;
`;

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
  itens-align: center;
  justify-content: center;
  flex-direction: column;
`;
