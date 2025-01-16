export async function getUsers() {
  const response = await fetch("http://localhost:5005/user", {
    cache: "no-store",
  });
  return response.json();
}
