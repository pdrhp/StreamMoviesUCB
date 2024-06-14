import client from "./client";

interface RegisterData {
    cpf: string;
    fullname: string;
    socialname: string;
    birthdate: string;
    rg: string;
    cellphone: string;
    email: string;
    password: string;
}

export const authUser = async (email: string, password: string) => {
    const response = await client.post('/login', {email, password});

    console.log(response.data);

    return response;
}


const register = async (data: RegisterData) => {
    const response = await client.post('/register', data);

    console.log(response.data)
}
