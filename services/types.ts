export type ServiceErrorCode =
  | "configuration"
  | "network"
  | "not-found"
  | "rate-limit"
  | "unknown";

export interface ServiceError {
  code: ServiceErrorCode;
  message: string;
  retryable: boolean;
}

export type ServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };
