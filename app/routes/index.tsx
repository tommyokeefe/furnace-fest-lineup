import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

import styles from "~/styles/home.css";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover ff-hero"
                src="/assets/sloss.jpg"
                alt="BTS playing on stage with the group leaving in action poses"
              />
              <div className="absolute inset-0 bg-[color:rgba(150, 17, 21,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-red-500 drop-shadow-md">
                  Furnace Fest lineup 2022
                </span>
              </h1>
              {!user && (
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl grunge-wrap shadow-sm">
                  Signup or login to create your personalized schedule
                </p>
              )}
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red sm:px-8"
                  >
                    View schedule for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red sm:px-8 transition"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-red px-4 py-3 font-medium text-white hover:bg-white transition"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
