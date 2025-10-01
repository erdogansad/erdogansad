import { Link } from "react-router-dom";

const Status = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="grow">
        <div className="h-full flex gap-2 flex-col justify-center items-center">
          <h1 className="text-slate-50 text-4xl">Oopps</h1>
          <p className="text-slate-50 text-xl">Supabase sunucularında bir sorun var gibi görünüyor.</p>
          <p className="text-slate-50 italic">Belki de yoktur...</p>
          <Link
            className="rounded-lg px-4 py-3 cursor-pointer select-none border-slate-950 bg-slate-950 text-slate-50 hover:bg-slate-400 hover:border-slate-400 transition-colors dark:border-slate-300 dark:bg-slate-50 dark:text-slate-950"
            to="https://erdogans.space"
          >
            <span>Tekrar Kontrol Et</span>
          </Link>
        </div>
      </div>
      <div className="py-2 flex gap-2 justify-center">
        <p className="text-slate-50">Erdoğan Şad </p>
        <span className="text-slate-50">|</span>
        <p className="text-slate-50">2025</p>
      </div>
    </div>
  );
};

export default Status;
