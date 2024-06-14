import { authUser } from '@/services/auth-service'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAuth } from '@/contexts/auth-context'
import User from '@/interfaces/User'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import FormInput from './form-input'
import { Button } from './ui/button'
import { Form } from './ui/form'
// eslint-disable-next-line @typescript-eslint/no-var-requires

const formLoginSchema = z.object({
    email: z.string({required_error: 'Campo obrigatório'}).min(5, 'O nome de usuário deve ter no mínimo 5 caracteres').email() ,
    password: z.string({required_error: 'Campo obrigatório'}).min(5, 'A senha deve ter no mínimo 5 caracteres')
})


const LoginForm = () => {

    const {setUser, user} = useAuth();

    const navigate = useNavigate();


    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user])

    const loginForm = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            password: '',
            email: ''
        }
    })

    const login = async (loginData: z.infer<typeof formLoginSchema>) => {
        try {
            const response = await authUser(loginData.email, loginData.password);

            if(response.status === 200){
                const user: User = response.data;
                
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
                
                navigate('/');
            }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any ) {
            if(error.response.status === 401){
                toast.error('Usuário ou senha inválidos', {
                    richColors: true,
                    position: 'top-center',
                    style: {
                        backgroundColor: '#3b0c09'
                    }
                })
            }
            

        }
    }

    const onSubmit = (formData: z.infer<typeof formLoginSchema>) => {
        login(formData);
    }

  return (
    <Form {...loginForm}>
        <form className='w-[60%] flex flex-col max-h-[16rem]' onSubmit={loginForm.handleSubmit(onSubmit)}>
            <FormInput type='text' control={loginForm.control} label='Email' formControlName='email' placeholder='Fulano345@gmail.com' />
            <FormInput type='password' control={loginForm.control} label='Senha' formControlName='password'/>
            <Button type='submit'>Entrar</Button>
        </form>
    </Form>
  )
}

export default LoginForm
