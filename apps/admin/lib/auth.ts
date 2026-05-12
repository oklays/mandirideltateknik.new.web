import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerSupabaseClient, getProfileById, hasPublicSupabaseEnv } from "@mdt/lib";

export async function getCurrentAdminContext() {
  if (!hasPublicSupabaseEnv()) {
    return {
      mode: "demo" as const,
      profile: { full_name: "Demo Admin", role: "admin" as const },
      user: { email: "demo@local.test", id: "demo-user" }
    };
  }

  const cookieStore = await cookies();
  const supabase = await createServerSupabaseClient(cookieStore);
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const profile = await getProfileById(user.id);

  if (!profile || (profile.role !== "admin" && profile.role !== "editor")) {
    return null;
  }

  return {
    mode: "live" as const,
    profile,
    user
  };
}

export async function requireAdminContext() {
  const context = await getCurrentAdminContext();

  if (!context) {
    redirect("/login");
  }

  return context;
}
