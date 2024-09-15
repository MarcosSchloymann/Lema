import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    apellido: z.string({
        required_error: 'Last Name is required'
    }),
    username: z.string({
        required_error: 'Username is required'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,
        { required_error: 'Password must be at least 6 characters' }
    ),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Invalid email'
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