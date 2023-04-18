import type { Metadata } from "next";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Users",
};
export default async function page() {
  //This data come during build time from server
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
        <br />
        {users.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
            </>
          );
        })}
      </h2>
    </section>
  );
  return content;
}
