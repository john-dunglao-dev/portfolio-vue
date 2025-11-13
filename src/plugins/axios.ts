import axios, { type AxiosError, type AxiosResponse } from 'axios'
import type { CustomInternalAxiosConfig } from '@/plugins/models/CustomAxios'

export default {
  install: () => {
    console.debug('[PLUGIN] Axios is being set up...')

    axios.interceptors.request.use(
      (config: CustomInternalAxiosConfig) => {
        console.debug(
          '[INTERCEPTOR] Axios request:',
          config?.url,
          config?.method,
          config?.data || config?.params || ''
        )

        config.headers.Accept = 'application/json'
        config.headers['Content-Type'] = 'application/json'

        console.debug(
          '[INTERCEPTOR] Transforming url:',
          config?.url,
          'to',
          import.meta.env.VITE_API_BASE_URL + config.url
        )
        config.url = import.meta.env.VITE_API_BASE_URL + config.url

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        console.debug('[INTERCEPTOR] Axios response:', response?.config?.url, response?.data)
        // return response.data as this is what we usually need.
        return response.data
      },
      (error: AxiosError) => {
        console.error('[INTERCEPTOR] Axios response error:', error?.request?.url, error?.message)
        return Promise.reject(error)
      }
    )
  },
}
