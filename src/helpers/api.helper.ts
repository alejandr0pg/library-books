export async function fetchAPI(url: string = '/') {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_END_POINT}${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error fetchAPI>', error);
  }
}
