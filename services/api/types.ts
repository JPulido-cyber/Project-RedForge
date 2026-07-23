import type { ServiceResult } from "../types";

export interface ApiRequest {
  path: string;
  signal?: AbortSignal;
}

export interface ApiClient {
  get<T>(request: ApiRequest): Promise<ServiceResult<T>>;
}
