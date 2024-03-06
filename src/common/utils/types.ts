type IApiResponse = {
  ok: boolean;
  result: unknown;
  error: unknown;
};

type IMoviePosterSize = "w500" | "original";

export type { IApiResponse, IMoviePosterSize };
