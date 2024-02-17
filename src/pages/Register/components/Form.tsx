import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, schema } from '../schema/registerSchema'
import Button from '../../../components/ui/Button'
import InputText from '../../../components/ui/InputText'
import { useRegisterUser } from '../../../hook/user.hook'
import { toast } from 'react-toastify'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isPending } = useRegisterUser()

  const onSubmit = async (user: RegisterSchema) => {
    try {
      const res = await mutateAsync(user)
      if (res.status === 200) {
        toast.success(res.data.message)
        return
      }
      toast.error(res.data.message)
    } catch (error) {
      toast.error('Error al crear el usuario')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg rounded-md border bg-white p-4 shadow-md [&>div]:flex [&>div]:flex-col'
    >
      <h2 className='text-center font-title text-3xl font-[900] leading-loose'>
        Register
      </h2>
      <div className='space-y-1'>
        <InputText
          label='Nombre'
          hookForm={register('name')}
          error={errors.name}
        />
        <InputText
          label='Apellido'
          hookForm={register('lastName')}
          error={errors.lastName}
        />
        <InputText
          label='Correo'
          hookForm={register('email')}
          error={errors.email}
        />
        <InputText
          label='Contraseña'
          type='password'
          hookForm={register('password')}
          error={errors.password}
        />
      </div>
      <Button
        type='submit'
        className='font-white mx-auto mt-4 text-white'
        disabled={isPending}
      >
        {isPending ? 'Cargando...' : 'Registrarse'}
      </Button>
    </form>
  )
}

export default Form
