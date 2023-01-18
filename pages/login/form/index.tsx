import React from 'react'
import * as C from './styles'
import { useForm, SubmitHandler } from "react-hook-form";
import useUser from '../../../hooks/useUser';
import { ILogin } from '../../../types/user';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import validateLogin from './validateForm';
import { toast } from "react-toastify";

function FormLogin() {
  const { login } = useUser()
  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
    resolver: yupResolver(validateLogin)
  });
  const customId = "custom-id-yes";
  const mutation = useMutation((data: ILogin) => toast.promise(login(data), {
    pending: 'Promise is pending',
    success: 'Promise resolved 👌',
    error: 'Promise rejected 🤯',
  }, { toastId: customId }))
  const onSubmit: SubmitHandler<ILogin> = data => mutation.mutate(data);
  return (
    <C.Form onSubmit={handleSubmit(onSubmit)}>
      <C.ContainerInfoLogin>
        <C.InputForm
          placeholder='Digite seu email'
          {...register("email")}
          error={errors.email && errors.email?.type === 'required' ? true : false}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <C.InputForm
          placeholder='Digite sua senha'
          {...register("password")}
          error={errors.password?.type === 'required' ? true : false}
          aria-invalid={errors.password ? "true" : "false"}
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