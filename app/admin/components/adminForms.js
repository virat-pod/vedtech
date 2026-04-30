"use client";
import { useState, useEffect } from "react";

const Forms = () => {
  const [loading, setloading] = useState(false);
  const [forms, setforms] = useState([]);

  useEffect(() => {
    const forms = async () => {
      setloading(true);
      const res = await fetch("/api/admin/forms");
      if (!res.ok) {
        setloading(false);
        return;
      }
      const data = await res.json();
      setforms(data.res);
      setloading(false);
    };
    forms();
  }, []);

  return (
    <div className="forms grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        <div className="text-zinc-500 text-lg">Not any form yet</div>
      ) : (
        forms.map((f) => {
          return (
            <div
              key={f._id}
              className="bg-white border border-neutral-100 rounded-2xl p-6 max-w-xl shadow-xs flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-950 text-white text-xs font-bold flex items-center justify-center">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      {`${f.name} ${f.lastname}`}
                    </p>
                    <p className="text-xs text-neutral-400">{f.email}</p>
                  </div>
                </div>
                <span className="text-[11px] text-neutral-400">
                  {new Date(f.createdAt).toISOString().slice(0, 10)}
                </span>
              </div>

              <div className="border-t border-neutral-100" />

              <p className="text-sm text-neutral-600 leading-relaxed">
                {f.message}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${f.email}`}
                  target="_blank"
                  className="text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors no-underline"
                >
                  Reply
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Forms;
