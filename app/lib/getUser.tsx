export default async function getUser(userId:string) {
  // get all users
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) throw new Error("failed to Fetch user");
  return res.json();
}
