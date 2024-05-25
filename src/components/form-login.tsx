import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import FormInput from './form-input'
import { Button } from './ui/button'
import { Form } from './ui/form'

const formLoginSchema = z.object({
    user: z.string({required_error: 'Campo obrigatório'}).min(5, 'O nome de usuário deve ter no mínimo 5 caracteres') ,
    password: z.string({required_error: 'Campo obrigatório'}).min(5, 'A senha deve ter no mínimo 5 caracteres')
})


const LoginForm = () => {

    const navigate = useNavigate();

    const loginForm = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            password: '',
            user: ''
        }
    })

    const onSubmit = (formData: z.infer<typeof formLoginSchema>) => {
        console.log(formData);

        if(formData.user === 'admin' && formData.password === 'admin'){
            localStorage.setItem('token', 'teste')
            navigate('/');
        }
    }

  return (
    <Form {...loginForm}>
        <form className='w-[60%] flex flex-col max-h-[16rem]' onSubmit={loginForm.handleSubmit(onSubmit)}>
            <FormInput type='text' control={loginForm.control} label='Nome de usuário' formControlName='user' placeholder='Fulano345' />
            <FormInput type='password' control={loginForm.control} label='Senha' formControlName='password'/>
            <Button type='submit'>Entrar</Button>
        </form>
    </Form>
  )
}

export default LoginForm
