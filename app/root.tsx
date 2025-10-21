import { Suspense } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "react-router";
import type { Route } from "./+types/root";
import "./i18n";
import "./assets/css/app.css";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import { createStore } from "./redux/store";
import { RefProvider } from "./context/ContextRef";
import type { LoaderFunctionArgs } from "react-router";
import { CookiesProvider } from "react-cookie";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const theme = cookieHeader?.match(/theme=(light|dark|system)/)?.[1] || "system";

  return { theme };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const { theme } = useLoaderData<typeof loader>() || { theme: "system" };

  return (
    <html lang={i18n.language} className={theme === "dark" ? "dark" : ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const store = createStore();

  return (
    <Suspense fallback="loading">
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <Provider store={store}>
          <RefProvider>
            <Outlet />
          </RefProvider>
        </Provider>
      </CookiesProvider>
    </Suspense>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
