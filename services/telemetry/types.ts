export interface TelemetryEvent {
  name: string;
  properties?: Readonly<Record<string, boolean | number | string>>;
  timestamp?: string;
}

export interface TelemetryClient {
  capture(event: TelemetryEvent): void;
}
