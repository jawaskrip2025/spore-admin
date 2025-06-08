'use client'
export const toObjectQuery = (params: URLSearchParams): Record<string, string> => {
  const obj: Record<string, string> = {};
  params.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

import { useRouter, useSearchParams } from 'next/navigation'

export function useUpdateSearchParams() {
  const router = useRouter()
  const searchParams = useSearchParams()
  return (params: Record<string, string | number>) => {
    const current = new URLSearchParams(searchParams.toString())

    for (const key in params) {
      current.set(key, String(params[key]))
    }

    const query = current.toString()
    router.push(`?${query}`)
  }
}
