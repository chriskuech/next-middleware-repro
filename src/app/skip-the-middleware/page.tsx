import { reproBug } from "@/lib/actions";

export default async function SkipTheMiddleware() {
  await reproBug();

  return (
    <div>
      <h1>This page should load </h1>
      <p>
        Calling bcrypt on the server outside the middleware should not repro
      </p>
    </div>
  );
}
