import { Input } from 'antd';
import { useState } from 'react';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <ContainerLoginScreem>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.jpg" alt="Logo" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <TitleInput>USUÁRIO</TitleInput>
          <Input title="USUÁRIO" onChange={handleUsername} value={username} />
          <TitleInput>SENHA</TitleInput>
          <Input type="password" title="SENHA" onChange={handlePassword} value={password} />
          <Button type="primary" margin="40px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" alt="Background" />
    </ContainerLoginScreem>
  );
};

export default LoginScreem;
