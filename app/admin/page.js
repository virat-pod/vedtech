import Forms from "./components/adminForms";

export const metadata = {
  title: "VedTech Admin",
  description: "Vedtech admin section",
};

const Admin = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-neutral-50 px-4 md:px-10  py-24">
      {/* Header */}
      <div className="wrapper w-full sm:max-w-8xl self-center">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">
            Dashboard
          </p>
          <h1 className="text-3xl font-black text-neutral-950">
            Form Submissions
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            All incoming contact messages.
          </p>
        </div>
        <Forms />
      </div>
    </main>
  );
};

export default Admin;
