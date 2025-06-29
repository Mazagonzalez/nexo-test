import type { Product } from '@/api/types';

export async function fetchProducts(): Promise<{ data: Product[] | null; error: string | null }> {
  try {
    const res = await fetch('https://vibra.icu/api/v1/products');

    if (!res.ok) {
      const message = `Error al obtener productos: ${res.status}`;
      return { data: null, error: message };
    }

    const data = (await res.json()) as Product[];
    return { data, error: null };
  } catch (err) {
    return { data: null, error: (err as Error).message };
  }
}
