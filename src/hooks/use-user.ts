import { useEffect, useMemo, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const supabase = createClient();

    // Get the initial user state
    const fetchUser = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        setUser(data.user);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user'));
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Clean up the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const name = useMemo(() => {
    if (!user) return null;
    const claims = user.user_metadata?.custom_claims ?? null


    if (!claims) return null;
    const givenName = claims.given_name ?? '';
    const familyName = claims.family_name ?? '';
    const groups = claims.groups ?? []
    const initials = `${givenName.charAt(0)}${familyName.charAt(0)}`;
    const isAdmin = groups?.includes(process.env.NEXT_PUBLIC_ADMIN_GROUP_ID!)

    return {
      givenName,
      familyName,
      displayName: `${givenName} ${familyName}`,
      initials,
      isAdmin,
    };
  }, [user]);

  return { user: { ...user, ...name }, loading, error };
}