import { IApiResponse, IMoviePosterSize } from "./types";

const handleApiSuccess = (data: unknown): IApiResponse => ({
  ok: true,
  result: data,
  error: null,
});

const handleApiError = (error: unknown): IApiResponse => ({
  ok: false,
  result: null,
  error: new Error(error as string),
});

const makeApiRequest = async (
  url: string,
  options?: RequestInit
): Promise<IApiResponse> => {
  const apiKey = process.env.API_KEY;
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    return handleApiError(response.statusText);
  }
  const data = await response.json();
  return handleApiSuccess(data);
};

const getMoviePosterPath = (posterPath: string, size: IMoviePosterSize) => {
  if (!posterPath) {
    return "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
  }
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};

const formatCurrency = (amount: number, currency: string): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    amount
  );

export { formatCurrency, getMoviePosterPath, makeApiRequest };
