import { authUser } from '@/services/auth-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import FormInput from './form-input'
import { Button } from './ui/button'
import { Form } from './ui/form'

const formLoginSchema = z.object({
    email: z.string({required_error: 'Campo obrigatório'}).min(5, 'O nome de usuário deve ter no mínimo 5 caracteres').email() ,
    password: z.string({required_error: 'Campo obrigatório'}).min(5, 'A senha deve ter no mínimo 5 caracteres')
})


const LoginForm = () => {

    const navigate = useNavigate();

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
                localStorage.setItem('status', 'logado')
                navigate('/');
            }

        } catch (error) {
            console.log(error);
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
