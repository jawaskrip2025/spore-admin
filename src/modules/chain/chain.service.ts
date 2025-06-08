import { axiosInstance } from "@/lib/axios"
import { TChain, TFormChain } from "@/types/chain"
import { TOptionList } from "@/types/common"
import { TQueryParam } from "@/types/query"


class Service {
  async LISTS(): Promise<TOptionList[]> {
    const response = await axiosInstance({
      method: 'GET',
      url: 'chains'
    })
    return response.data.data.map((item: TChain) => {
      return {
        value: String(item.id),
        label: item.name,
      }
    })
  }
  async GET(params?: TQueryParam): Promise<TChain[]> {
    const response = await axiosInstance({
      method: 'GET',
      url: 'chains',
      params
    })
    return response.data.data
  }
  async CREATE(form: TFormChain): Promise<TChain> {
    const response = await axiosInstance({
      method: 'POST',
      url: 'chains',
      data: form
    })
    return response.data.data
  }
  async DELETE(id: number) {
    const response = await axiosInstance({
      method: 'DELETE',
      url: `chains/${id}`,
    })
    return response.data.data
  }
  async UPDATE(form: TChain): Promise<TChain> {
    const { id, ...data } = form;
    const response = await axiosInstance({
      method: 'PUT',
      url: `chains/${id}`,
      data: data
    })
    return response.data.data
  }
}

const chainService = new Service()

export default chainService