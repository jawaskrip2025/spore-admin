"use client"
import { toObjectQuery } from "@/lib/param";
import { TFormBalance } from "@/types/balance";
import {
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Service from "../balance.service";

export const useAllBalance = () => {
  const searchString = useSearchParams();
  const query = toObjectQuery(searchString)
  const queryAllBalance = useQuery({
    queryKey: ["get_all_balance", query],
    queryFn: () => Service.GET(query),
    enabled: true
  });
  return queryAllBalance
}

export const useCreateBalance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TFormBalance) => Service.CREATE(data),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success submit data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_balance"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to submit data!"
      })
    }
  });
};
export const useDeleteBalance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => Service.DELETE(id),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success delete data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_balance"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to delete data!"
      })
    }
  });
};

export const useUpdateBalance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TFormBalance) => Service.UPDATE(data),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success submit data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_balance"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to submit data!"
      })
    }
  });
};