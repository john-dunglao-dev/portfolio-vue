import type { InternalAxiosRequestConfig } from "axios";


export type CustomInternalAxiosConfig = InternalAxiosRequestConfig & {
  skipAbortController?: boolean;
};
