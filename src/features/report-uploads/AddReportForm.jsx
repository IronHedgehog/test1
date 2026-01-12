import { Modal } from "@/components/ui/Modal";
import { useState } from "react";
import { ReportUploadForm } from "./ReportUploadForm";

export const AddReportSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
      >
        Додати звіт
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ReportUploadForm onClose={() => setIsOpen(false)} />
      </Modal>
    </section>
  );
};
