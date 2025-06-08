"use client"
import { toObjectQuery } from "@/lib/param";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import chainService from "../chain.service";
import { TFormChain } from "@/types/chain";
import { toast } from "sonner";


export const useAllChain = () => {
  const searchString = useSearchParams();
  const query = toObjectQuery(searchString)
  const queryAllChain = useQuery({
    queryKey: ["get_all_chain", query],
    queryFn: () => chainService.GET(query),
    enabled: true
  });
  return queryAllChain
}

export const useCreateChain = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TFormChain) => chainService.CREATE(data),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success submit data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_chain"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to submit data!"
      })
    }
  });
};
export const useDeleteChain = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => chainService.DELETE(id),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success delete data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_chain"]
      });
    },
    onError: () => {
      toast.error('Error', {
        description: "Fail to delete data!"
      })
    }
  });
};

export const useUpdateChain = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TFormChain) => chainService.UPDATE(data),
    onSuccess: () => {
      toast.success('Success', {
        description: "Success submit data"
      })
      queryClient.invalidateQueries({
        queryKey: ["get_all_chain"]
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
export const useChainList = () => {
  const queryAllChain = useQuery({
    queryKey: ["get_chain_list"],
    queryFn: () => chainService.LISTS(),
    enabled: true
  });
  return queryAllChain
}