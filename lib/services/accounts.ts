import { SupabaseClient } from "@supabase/supabase-js";

export type AccountType = "CASH" | "BANK" | "CREDIT_CARD" | "SAVINGS";

export type Account = {
  id: string;
  user_id: string;
  name: string;
  type: AccountType;
  balance: number;
  is_default: boolean;
  created_at: string;
};

export async function getAccounts(supabase: SupabaseClient, userId: string) {
  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", userId)
    .order("is_default", { ascending: false })
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data as Account[];
}

export async function createAccount(
  supabase: SupabaseClient,
  userId: string,
  { name, type }: { name: string; type: AccountType },
) {
  const { data, error } = await supabase
    .from("accounts")
    .insert({ user_id: userId, name, type, balance: 0, is_default: false })
    .select()
    .single();

  if (error) throw error;
  return data as Account;
}
