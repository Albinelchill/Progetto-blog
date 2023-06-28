

export const get = async ({ redirect, cookies }) => {
  cookies.delete("session", {
    path: "/",
  });
  return redirect("/registrazione");
};
