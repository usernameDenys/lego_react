export async function getCards() {
  try {
    const response = await fetch("db.json");
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Problème avec la requête :", error);
    return [];
  }
}
