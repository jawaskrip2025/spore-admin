"use client"
import { toObjectQuery } from "@/lib/param";
import { TFormTicker } from "@/types/ticker";
import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Service from "../ticker.service";

export const useAllTicker = () => {
  const searchString = useSearchParams();
  const query = toObjectQuery(searchString)
  const queryAllTicker = useQuery({
    queryKey: ["get_all_ticker", query],
    queryFn: () => Service.GET(query),
    enabled: true
  });
  return queryAllTicker
}

export const useCreateTicker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TFormTicker) => Service.CREATE(data),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success submit data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_ticker"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to submit data!"
      })
    }
  });
};
export const useDeleteTicker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => Service.DELETE(id),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success delete data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_ticker"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to delete data!"
      })
    }
  });
};

export const useUpdateTicker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TFormTicker) => Service.UPDATE(data),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success submit data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_ticker"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to submit data!"
      })
    }
  });
};

// extra
export const useTickerList = () => {
  const queryAllTicker = useQuery({
    queryKey: ["get_ticker_list"],
    queryFn: () => Service.LISTS(),
    enabled: true
  });
  return queryAllTicker
}