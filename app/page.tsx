export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Prueba de pagina{" "}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            primer cambio
          </p>
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            cambio desde la rama login
          </h2>
        </div>
      </main>
    </div>
  );
}
