import LoginForm from "@/components/form-login"
import RegisterForm from "@/components/register-form"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs"
import { useState } from "react"

const LoginPage = () => {

  const [actualTab, setActualTab] = useState('login');

  return (
    <div className="h-full w-full flex justify-center pb-16 gap-10 items-center flex-col">
        <div className="w-[40%] py-5">
            <Card className="w-full h-full flex justify-center items-center p-5">
                {/* <CardHeader className="flex justify-center items-center">
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Digite seu usuário e sua senha</CardDescription>
                </CardHeader> */}
                <Tabs value={actualTab} onValueChange={setActualTab} defaultValue="login" className="w-full flex gap-3 flex-col justify-center items-center">
                  <TabsList className="w-[10rem]">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Registrar</TabsTrigger>
                  </TabsList>
                  <TabsContent className="flex justify-center w-full" value="login"><LoginForm/></TabsContent>
                  <TabsContent className="flex justify-center w-full" value="register"><RegisterForm setActualTab={setActualTab}/></TabsContent>
                </Tabs>
                {/* <CardContent className="flex justify-center">
                  <LoginForm />
                </CardContent> */}
            </Card>
        </div>
    </div>
  )
}

export default LoginPage
