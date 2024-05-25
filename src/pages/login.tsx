import LoginForm from "@/components/form-login"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LoginPage = () => {
  return (
    <div className="h-full w-full flex justify-center pb-16 gap-10 items-center flex-col">
        <div className="h-[45%] w-[40%]">
            <Card className="w-full h-full">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Digite seu usuário e sua senha</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <LoginForm />
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default LoginPage
