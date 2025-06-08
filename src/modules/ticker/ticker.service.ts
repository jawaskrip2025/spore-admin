import { axiosInstance } from "@/lib/axios"
import { TOptionList } from "@/types/common"
import { TQueryParam } from "@/types/query"
import { TFormTicker, TTicker } from "@/types/ticker"

class Service {
    async LISTS(): Promise<TOptionList[]> {
      const response = await axiosInstance({
        method: 'GET',
        url: 'ticker'
      })
      return response.data.data.map((item: TTicker) => {
        return {
          value: String(item.id),
          label: item.name,
        }
      })
    }
  async GET(params?: TQueryParam): Promise<TTicker[]> {
    const response = await axiosInstance({
      method: 'GET',
      url: 'ticker',
      params
    })
    return response.data.data
  }
  async CREATE(form: TFormTicker): Promise<TTicker> {
    const response = await axiosInstance({
      method: 'POST',
      url: 'ticker',
      data: form
    })
    return response.data.data
  }
  async DELETE(id: number) {
    const response = await axiosInstance({
      method: 'DELETE',
      url: `ticker/${id}`,
    })
    return response.data.data
  }
  async UPDATE(form: TFormTicker): Promise<TTicker> {
    const {id, ...data } = form;
    const response = await axiosInstance({
      method: 'PUT',
      url: `ticker/${id}`,
      data: data
    })
    return response.data.data
  }
}

const tickerService = new Service()

export default tickerService