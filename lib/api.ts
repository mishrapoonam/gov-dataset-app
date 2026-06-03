const BASE_URL = "https://api.beta.ons.gov.uk/v1/datasets";

export async function getDatasets() {
  // cache for 1 hour - ONS data doesn't update that often
  const response = await fetch(BASE_URL, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch datasets");
  }

  const data = await response.json();
  return data.items ?? [];
}

export async function getDatasetById(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error(`Dataset ${id} not found`);
  }

  // console.log('Fetched dataset:', id);
  return res.json();
}