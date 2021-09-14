import { NextRouter, useRouter } from 'next/router'
import locales from '@locales'

export const useTypeSafeRouter = () => {
  return useRouter() as NextRouter & {
    locale?: keyof typeof locales
  }
}
