import { LogoutButton } from "@/components/logout-button";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const client = await createClient();

  const { data: { user } } = await client.auth.getUser();
  return (
    <div >
      <main >
        {/* <pre>
          {JSON.stringify(user, null, 2)}
        </pre> */}
        <LogoutButton />
      </main>
    </div>
  );
}
