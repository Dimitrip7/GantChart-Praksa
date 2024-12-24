/**
 * Updates the URL parameters based on provided values.
 */
export function updateURLParams(params: Record<string, string | null>) {
    const searchParams = new URLSearchParams(window.location.search);
  
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
  
    window.history.replaceState(null, "", `?${searchParams.toString()}`);
  }
  