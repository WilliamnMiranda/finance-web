import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies'
import * as C from './styles'
import Lottie from 'react-lottie'
import LoginImage from '../../assets/login_lottie.json'
import FormLogin from "./form";
import nookies from 'nookies'
const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginImage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const tamImage = '100%'
  return (
    <C.Container>
      <C.ContainerAll>
        <C.ContainerIntro>
          <C.Text>
            <C.ContainerTittle>
              <C.Tittle>
                <p>Entre para</p>
                <p>Acessar seu dashboard</p>
              </C.Tittle>
            </C.ContainerTittle>
            <C.Description>
              <p>Se você não tem uma conta</p>
              <p>você pode se registrar clicando aqui</p>
            </C.Description>
          </C.Text>
          <C.ContainerImageLottie>
            <Lottie options={defaultOptions}
              height={tamImage}
              width={tamImage}
            />
          </C.ContainerImageLottie>
        </C.ContainerIntro>
        <C.ContainerLogin>
          <FormLogin />
        </C.ContainerLogin>
      </C.ContainerAll>
    </C.Container>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance.token']: token } = nookies.get(ctx)
  if (token)
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  return {
    props: {}, // will be passed to the page component as props
  }
}
