import InputText from '@/components/ui/InputText'
import { useForm } from 'react-hook-form'
import { LoginSchema, schema } from '../schema/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/ui/Button'
import { useLogin } from '../hooks/useLogin'

const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema)
  })

  const { mutate } = useLogin()

  const handleOnSubmit = async (data: LoginSchema) => {
    mutate(data)
  }

  return (
    <form
      className='w-11/12 max-w-md space-y-2 rounded-xl bg-white px-6 py-4'
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <h2 className='text-center text-4xl font-bold'>Login</h2>
      <div className='space-y-1'>
        <InputText
          label='Correo'
          hookForm={register('email')}
          error={errors.email}
        />
        <InputText
          label='Contraseña'
          hookForm={register('password')}
          error={errors.password}
          type='password'
        />
      </div>
      <Button type='submit' className='mb-2 text-white'>
        Iniciar Sesión
      </Button>
    </form>
  )
}

export default FormLogin
