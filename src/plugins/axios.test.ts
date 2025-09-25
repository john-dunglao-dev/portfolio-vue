import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios';
import axiosPlugin from '@/plugins/axios';

describe('Axios Interceptors', () => {
  let instance: AxiosInstance;

  beforeEach(() => {
    // Clear existing interceptors
    axios.interceptors.request.clear();
    axios.interceptors.response.clear();
    
    // Install the plugin
    axiosPlugin.install();
    
    instance = axios;
  });

  afterEach(() => {
    // Clear interceptors after each test
    axios.interceptors.request.clear();
    axios.interceptors.response.clear();
  });

  it('should log request details in request interceptor', async () => {
    const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});
    let capturedConfig: InternalAxiosRequestConfig | undefined;
    
    // Add a custom interceptor to capture the config after the plugin interceptor runs
    instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      capturedConfig = config;
      return config;
    });

    // Mock the adapter to return a resolved promise
    instance.defaults.adapter = vi.fn().mockResolvedValue({
      data: {},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    await instance.get('/test');
    
    // Check that the request interceptor was called with correct parameters
    expect(consoleSpy).toHaveBeenCalledWith('[INTERCEPTOR] Axios request:', '/test', 'get', '');
    // Check that headers were set correctly
    expect(capturedConfig?.headers?.['Content-Type']).toBe('application/json');
    expect(capturedConfig?.headers?.['Accept']).toBe('application/json');
    
    consoleSpy.mockRestore();
  });

  it('should return response data directly from response interceptor', async () => {
    const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {});
    const mockData = { message: 'success' };

    // Mock the adapter to return a resolved promise with proper config
    instance.defaults.adapter = vi.fn().mockResolvedValue({
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { 
        url: '/test',
        method: 'get'
      },
    });

    const response = await instance.get('/test');
    
    // The plugin's response interceptor returns response.data directly
    expect(response).toEqual(mockData);
    // Check both request and response debug calls
    expect(consoleSpy).toHaveBeenCalledWith('[INTERCEPTOR] Axios request:', '/test', 'get', '');
    expect(consoleSpy).toHaveBeenCalledWith('[INTERCEPTOR] Axios response:', '/test', mockData);
    
    consoleSpy.mockRestore();
  });

  it('should log errors in response interceptor', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const errorMessage = 'Network Error';
    const mockError = { 
      message: errorMessage,
      request: { url: '/test' }
    };

    // Mock the adapter to return a rejected promise
    instance.defaults.adapter = vi.fn().mockRejectedValue(mockError);

    try {
      await instance.get('/test');
      // Should not reach here
      expect.fail('Expected request to throw an error');
    } catch (error: any) {
      expect(error.message).toBe(errorMessage);
      expect(consoleSpy).toHaveBeenCalledWith(
        '[INTERCEPTOR] Axios response error:', 
        '/test', 
        errorMessage
      );
    }
    
    consoleSpy.mockRestore();
  });

  it('should have the content-type and accept headers set in request interceptor', async () => {
    let capturedConfig: InternalAxiosRequestConfig | undefined;
    
    // Add a custom interceptor to capture the config after the plugin interceptor runs
    instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      capturedConfig = config;
      return config;
    });

    // Mock the adapter to return a resolved promise
    instance.defaults.adapter = vi.fn().mockResolvedValue({
      data: {},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    await instance.get('/test');
    
    expect(capturedConfig?.headers?.['Content-Type']).toBe('application/json');
    expect(capturedConfig?.headers?.['Accept']).toBe('application/json');
  });
});