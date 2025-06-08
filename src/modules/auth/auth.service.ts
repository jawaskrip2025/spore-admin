import { axiosInstance } from "@/lib/axios"
import { TFormLogin, TResponseLogin } from "@/types/auth"

class Service {
  async login(formLogin: TFormLogin): Promise<TResponseLogin> {
    const response = await axiosInstance({
      method: 'POST',
      url: 'auth/login',
      data: formLogin
    })
    return response.data.data
  }
}

const authService = new Service()

export default authService