import { LogoutButton } from "@/components/logout-button";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const client = await createClient();

  const { data: { user } } = await client.auth.getUser();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
        <LogoutButton />
      </main>
    </div>
  );
}
