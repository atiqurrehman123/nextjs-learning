import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/app/lib/getAllUsers";
type Params = {
  params: {
    userId: string;
  };
};
export default async function UserPage({ params: { userId } }: Params) {
  console.log(userId,"userid")
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post> = getUserPosts(userId);
  // These two requests call at same time a give record from that data
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <Suspense fallback={<h1>Loading .....</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
//for creating staic pages during build time
export async function generateStaticParams(){
  const usersData:Promise<User[]> =getAllUsers()
  const users=await usersData

  return users.map(user=>({
    userId:user.id.toString()
  }))
}