import { axiosInstance } from "@/lib/axios"
import { TBalance, TFormBalance } from "@/types/balance"
import { TPagination } from "@/types/pagination"
import { TQueryParam } from "@/types/query"

class Service {
  async GET(params?: TQueryParam): Promise<TPagination<TBalance>> {
    const response = await axiosInstance({
      method: 'GET',
      url: 'balance-wallet',
      params
    })
    return response.data.data
  }
  async CREATE(form: TFormBalance): Promise<TBalance> {
    const response = await axiosInstance({
      method: 'POST',
      url: 'balance-wallet',
      data: form
    })
    return response.data.data
  }
  async DELETE(id: number) {
    const response = await axiosInstance({
      method: 'DELETE',
      url: `balance-wallet/${id}`,
    })
    return response.data.data
  }
  async UPDATE(form: TFormBalance): Promise<TBalance> {
    const {id, ...data } = form;
    const response = await axiosInstance({
      method: 'PUT',
      url: `balance-wallet/${id}`,
      data: data
    })
    return response.data.data
  }
}

const tickerService = new Service()

export default tickerService