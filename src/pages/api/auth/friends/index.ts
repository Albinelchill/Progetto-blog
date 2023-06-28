import type { APIRoute } from "astro";
import { app } from "../../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";

  if (!name || !age) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("./pages/api/auth/friends");
    await friendsRef.add({
      name,
      age: parseInt(age),
      isBestFriend,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/index.html");
<<<<<<< HEAD
};
=======
};
>>>>>>> 800dba1324e22094aacd3f71f30f2f8b743d1799
