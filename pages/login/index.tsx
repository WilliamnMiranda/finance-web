import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies'
import * as C from './styles'
import Lottie from 'react-lottie'
import LoginImage from '../../assets/login_lottie.json'
import FormLogin from "./form";
import { ToastContainer } from "react-toastify";
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
                <p>Sign in to</p>
                <p>Access the dashboard</p>
              </C.Tittle>
            </C.ContainerTittle>
            <C.Description>
              <p>If you dont an account</p>
              <p>you can Register here!</p>
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
  const { ['finance.token']: token } = parseCookies(ctx)
  console.log(token)
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
