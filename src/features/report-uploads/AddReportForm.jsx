import { useState } from "react";
import { ReportUploadForm } from "./ReportUploadForm";

export const AddReportSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" mb-8">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
      >
        {isOpen ? "Закрити форму" : "Додати звіт"}
      </button>

      {isOpen && (
        <div className=" fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Фон (Overlay) */}
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Контент форми */}
          <div className="relative z-10 w-full max-w-xl bg-white rounded-lg shadow-xl overflow-hidden">
            <ReportUploadForm onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
};
