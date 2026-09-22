type Strategy = "api" | "embedded-json" | "html" | "browser";

interface Limit {
    minute: number;
    daily: number;
    weekend: number;
    monthly: number;
}

interface JobAdapter<T extends Record<string, unknown>> {
  name: string;
  readonly strategy: Strategy;
  readonly limit:  Limit;
  fetch(): Promise<T[]>;
}
