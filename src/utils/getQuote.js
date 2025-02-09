const apiKey = import.meta.env.VITE_API_NINJAS_KEY;

export default async function getQuote(){
    const requestURL = "https://api.api-ninjas.com/v1/quotes"
    const header = {
        "X-Api-Key": apiKey,
    };
    try {
        const response = await fetch(requestURL,{headers:header});
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        return res;
      } catch (error) {
        console.error("Error = ", error);
      }
}