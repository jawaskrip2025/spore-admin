"use client";

import { TResponseProfile } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";
const getProfile = async ():Promise<TResponseProfile> => {
  const responseText = localStorage.getItem('user')
  return responseText && JSON.parse(responseText)
}

export const useUserProfile = () => {
  const queryProfile = useQuery({
    queryKey: ["get_profile"],
    queryFn: () => getProfile(),
  });

  return queryProfile
}
