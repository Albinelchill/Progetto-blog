import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export const get: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);

  /* Get token from request headers */
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(
      "No token found",
      { status: 401 }
    );
  }

  /* Verify id token */
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response(
      "Invalid token",
      { status: 401 }
    );
  }

  /* Create and set session cookie */
  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays,
  });

  cookies.set("session", sessionCookie, {
    path: "/",
  });

<<<<<<< HEAD:src/pages/api/auth/friends/signin.ts
  return redirect("/index.html");
=======
  return redirect("/dashboard");
>>>>>>> 800dba1324e22094aacd3f71f30f2f8b743d1799:src/pages/api/auth/signin.ts
};
