import { useQuery } from '@tanstack/react-query'
import { getVerifyToken } from '../service/verifyTokenService'

export const useVerifyToken = () =>
  useQuery({
    queryKey: ['verifyToken'],
    queryFn: getVerifyToken
  })
