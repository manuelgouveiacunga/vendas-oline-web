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
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" alt="Background" />
    </ContainerLoginScreem>
  );
};

export default LoginScreem;
