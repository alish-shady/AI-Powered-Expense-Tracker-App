import supabase from "./supabase";

export async function loginAPI({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function signupAPI({ email, password, fullName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function signoutAPI() {
  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function addExpenseAPI({ amount, category, description }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("expenses")
    .insert([{ amount, category, description, user_id: user.id }])
    .select();
  if (error) throw new Error(error.message);

  return data;
}

export async function getExpensesAPI() {
  let { data: expenses, error } = await supabase.from("expenses").select("*");
  if (error) throw new Error(error.message);

  return expenses;
}

export async function deleteExpenseAPI(expenseId) {
  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId);

  if (error) throw new Error(error.message);

  return true;
}
