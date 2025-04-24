import { Input } from 'antd';

import Button from '../../../shared/buttons/button/Button';
import { TitleInput } from '../../../shared/Inputs/Input/input.styles';
import { LimitedContainer, TitleLogin } from '../styles/LoginScreem.styles';
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
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <TitleInput>USUÁRIO</TitleInput>
          <Input title="USUÁRIO" />
          <TitleInput>SENHA</TitleInput>
          <Input title="SENHA" />
          <Button type="primary" margin="40px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" alt="Background" />
    </ContainerLoginScreem>
  );
};

export default LoginScreem;
