"use client";

import Container from "@/components/container";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signup } from "../actions";
import { useEffect } from "react";

export default function AppsPage() {
  // const router = useRouter();
  const [result, dispatch] = useFormState(signup, undefined);

  useEffect(() => {
    console.log(result?.resultCode);
  }, [result]);

  return (
    <Container>
      <form
        action={dispatch}
        className="flex flex-col items-center gap-4 space-y-3"
      >
        <div>
          <h1>Sign up for an account!</h1>

          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>

          <button type="submit">Create account</button>
        </div>

        <hr />

        <Link href="/login">
          Already have an account? <span>Log in</span>
        </Link>
      </form>
    </Container>
  );
}
