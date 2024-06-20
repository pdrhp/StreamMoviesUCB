import client from "@/services/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Loader } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import FormInput from "./form-input"
import { Form } from "./ui/form"

const registerFormSchema = z.object({
    cpf: z.string({required_error: 'Campo obrigatório'}).min(11, 'O CPF deve ter no mínimo 11 caracteres').max(11, 'O CPF deve ter no máximo 11 caracteres'),
    email: z.string({required_error: 'Campo obrigatório'}).min(5, 'O email deve ter no mínimo 5 caracteres').email(),
    password: z.string({required_error: 'Campo obrigatório'}).min(5, 'A senha deve ter no mínimo 5 caracteres'),
    fullname: z.string({required_error: 'Campo obrigatório'}).min(5, 'O nome deve ter no mínimo 5 caracteres'),
    socialname: z.string({required_error: 'Campo obrigatório'}).min(3, 'O nome social deve ter no mínimo 3 caracteres'),
    birthdate: z.string({required_error: 'Campo obrigatório'}).min(8, 'A data de nascimento deve ter no mínimo 8 caracteres'),
    cellphone: z.string({required_error: 'Campo obrigatório'}).min(11, 'O celular deve ter no mínimo 11 caracteres'),
    rg: z.string({required_error: 'Campo obrigatório'}).min(9, 'O RG deve ter no mínimo 9 caracteres'),
    isAdmin: z.boolean().default(false)
})

type RegisterFormSchemaType = z.infer<typeof registerFormSchema>

type RegisterFormProps = {
    setActualTab: (tab: string) => void
}

const RegisterForm = ({setActualTab}) => {

    const registerForm = useForm<RegisterFormSchemaType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            cpf: '',
            email: '',
            password: '',
            fullname: '',
            socialname: '',
            birthdate: '',
            cellphone: '',
            rg: '',
            isAdmin: false
        }
    })

    const registerRequest = async (data: RegisterFormSchemaType) => {
        const response = await client.post('/users', data);
        console.log(response);
        return response.data;
    }

    const {mutate: register, isPending} = useMutation({
        mutationFn: registerRequest,
        onSuccess: () => {
            toast.success('Usuário cadastrado com sucesso', {
                richColors: true,
                style: {
                    backgroundColor: '#10B981',
                    color: '#fff'
                }
            });
            registerForm.reset();
            setActualTab('login');
        }
    })

    const onSubmit = (data: RegisterFormSchemaType) => {
        console.log(data);
        register(data);
    }

    const { control, handleSubmit} = registerForm;

  return (
    <Form {...registerForm}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[60%] flex flex-col">
            <div className="flex gap-6">
            <FormInput control={control} formControlName="fullname" label="Nome Completo" type="text" />
            <FormInput control={control} formControlName="socialname" label="Nome Social" type="text" />
            </div>
            <div className="flex gap-6">
            <FormInput control={control} formControlName="email" label="E-mail" type="text" />
            <FormInput control={control} formControlName="birthdate" label="Data de nascimento" type="date" />
            </div>
            <div className="flex gap-6">
            <FormInput control={control} formControlName="cellphone" label="Numero de celular" type="text" />
            <FormInput control={control} formControlName="rg" label="Rg" type="text" />
            </div>
            <div className="flex gap-6">
            <FormInput control={control} formControlName="cpf" label="CPF" type="text" />
            <FormInput control={control} formControlName="password" label="Senha" type="text" />
            </div>
            <button type="submit" className="w-full bg-primary text-white p-2 rounded-md">
                {isPending ? <Loader className=" animate-spin h-5 w-5"/> : 'Cadastrar'}
            </button>
        </form>
    </Form>
  )
}


export default RegisterForm
