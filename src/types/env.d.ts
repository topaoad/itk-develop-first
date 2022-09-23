declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly BEARER_TOKEN: string;
    readonly GH_TOKEN: string;
    readonly NEXT_PUBLIC_API_KEY: string;
  }
}
