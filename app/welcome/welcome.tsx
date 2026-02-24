import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import viagenIcon from "./viagen-icon.png";

export function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center gap-4">
          <img
            src={viagenIcon}
            alt="viagen"
            className="w-14 h-14 rounded-2xl"
          />
          <h1 className="text-6xl font-bold tracking-tight font-mono">
            boa viagen
          </h1>
        </div>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Claude in your dev server.
        </p>
        <div className="w-32 opacity-40 mt-4">
          <img
            src={logoLight}
            alt="React Router"
            className="block w-full dark:hidden"
          />
          <img
            src={logoDark}
            alt="React Router"
            className="hidden w-full dark:block"
          />
        </div>
      </div>
    </main>
  );
}
