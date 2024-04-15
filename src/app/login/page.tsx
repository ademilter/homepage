"use client";

import Container from "@/components/container";
import Link from "next/link";
import { useFormState } from "react-dom";
import { authenticate } from "../actions";

export default function AppsPage() {
  // const router = useRouter();
  const [result, dispatch] = useFormState(authenticate, undefined);

  return (
    <Container>
      <form
        action={dispatch}
        className="flex flex-col items-center gap-4 space-y-3"
      >
        <div>
          <h1>Please log in to continue.</h1>
          <div>
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
          </div>
          <button>Log in</button>
        </div>

        <Link href="/signup">
          No account yet? <span>Sign up</span>
        </Link>
      </form>
    </Container>
  );
}
