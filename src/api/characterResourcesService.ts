export const fetchClasses = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/2014/classes`
  );
  return await response.json();
};

export const fetchAvailableSubclasses = async (slug: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/2014/classes/${slug}/subclasses`
  );
  return await response.json();
};

export const fetchClassData = async (slug: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/2014/classes/${slug}`
  );
  return await response.json();
};

export const fetchBackgrounds = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/2014/backgrounds`
  );
  return await response.json();
};

export const fetchRaces = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/2014/races`
  );
  return await response.json();
};
