export default async function getAllUsers() {
  // get all users
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("failed to Fetch users");
  return res.json();
}
