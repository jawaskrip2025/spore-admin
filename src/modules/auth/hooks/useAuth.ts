"use client";
import { TFormLogin } from "@/types/auth";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import authService from "../auth.service";

export const useAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const login = async (formLogin: TFormLogin) => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect") ?? "/";
    try {
      setLoading(true)
      const response = await authService.login(formLogin)
      Cookies.set('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      router.push(redirect);
    } catch (error: any) {
      toast.error('Error', {
        description: error.response?.data?.data || "Login Failed!",
        position: "bottom-center"
      })
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    Cookies.remove('token')
    localStorage.removeItem('user')
    router.push('/login');
  }
  return {
    login,
    loading,
    logout
  }
}
