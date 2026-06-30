export interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export declare function fetch(url: string, options?: FetchOptions): Promise<Response>;
