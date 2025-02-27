import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa! You&apos;re going too fast!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Please slow down and try again in a few seconds. If you continue to see
        this message, please contact support
      </p>
    </main>
  );
};

export default Page;
