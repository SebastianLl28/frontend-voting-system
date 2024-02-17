import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  lastName: z.string().min(1, 'El apellido es necesario'),
  email: z.string().min(1, 'El Email es necesario').email('El tipo de email no es valida'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
})

export type RegisterSchema = z.infer<typeof schema>