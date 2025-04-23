import { Input } from 'antd';

import { TitleInput } from '../../../shared/Inputs/Input/input.styles';
import { LimitedContainer } from '../styles/LoginScreem.styles';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreem,
  LogoImage,
} from '../styles/LoginScreem.styles';

const LoginScreem = () => {
  return (
    <ContainerLoginScreem>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.jpg" alt="Logo" />
          <TitleInput>USUÁRIO</TitleInput>
          <Input title="USUÁRIO" />
          <TitleInput>SENHA</TitleInput>
          <Input title="SENHA" />
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" alt="Background" />
    </ContainerLoginScreem>
  );
};

export default LoginScreem;
