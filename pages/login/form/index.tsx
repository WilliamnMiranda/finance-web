import React from 'react'
import * as C from './styles'
import { useForm, SubmitHandler } from "react-hook-form";
import useUser from '../../../hooks/useUser';
import { ILogin } from '../../../types/user';
import { useMutation } from '@tanstack/react-query';
function FormLogin() {

  const { login } = useUser()
  const mutation = useMutation((data: ILogin) => login(data))
  const onSubmit: SubmitHandler<ILogin> = data => mutation.mutate(data);
  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>();
  return (
    <C.Form onSubmit={handleSubmit(onSubmit)}>
      <C.ContainerInfoLogin>
        <C.InputForm
          placeholder='Digite seu email'
          {...register("email")}
        />
        <C.InputForm
          placeholder='Digite sua senha'
          {...register("password")}
        />
        <p> Esqueceu sua senha ? </p>
      </C.ContainerInfoLogin>
      <C.ButtonLogin>Login</C.ButtonLogin>

      <C.ContainerLoginSocial>
        <span> Or continue with </span>
      </C.ContainerLoginSocial>
    </C.Form>
  )
}

export default FormLogin