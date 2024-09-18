import {z} from 'zod'

export const registerSchema = z.object({
    user: z.string({
        required_error: "Username is required",
    }),
    apellido: z.string({
        required_error: 'Last Name is required'
    }),
    nombre: z.string({
        required_error: 'Name is required'
    }),
    password: z
    .string({
        required_error: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters",
      }),
    email: z    
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Email is not valid",
      }),
})

export const loginSchema = z.object({
    user: z.string({
        required_error: "Username is required"
    }),
    password: z.string({
        required_error: "Password is required"
    })
})