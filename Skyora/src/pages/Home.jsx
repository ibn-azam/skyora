import { useState } from "react";

const Home = () => {
    const [click, setClick] = useState("");

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-xl rounded-2xl border border-sky-100 bg-white p-8 text-center shadow-lg shadow-sky-100/60">
                <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                    Weather
                </span>
                <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-sky-500 sm:text-6xl">
                    Skyora
                </h2>
                <p className="mx-auto mt-4 max-w-md text-base text-slate-700 sm:text-lg">
                    Check today&apos;s weather in Skyora at a glance.
                </p>

                <div className="mt-8">
                    <button
                        onClick={() => setClick("clicked")}
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-5 py-3 text-base font-semibold text-slate-900 shadow-md shadow-sky-200 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-200"
                    >
                        Check Weather
                    </button>
                </div>

                {click && (
                    <p className="mt-4 text-sm font-medium text-sky-600">Weather check started</p>
                )}
            </div>
        </main>
    );
};

export default Home;