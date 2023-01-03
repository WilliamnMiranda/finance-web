import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies'

const Register = () => {
  return (
    <div>register</div>
  )
}

export default Register

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance']: token } = parseCookies(ctx)
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
