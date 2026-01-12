import { Transition } from "@headlessui/react";
import { Fragment } from "react";

import { ReportUploadFields } from "./ReportUploadFields";
import { useReportUploadForm } from "./useReportUploadForm";

export const ReportUploadForm = ({ onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useReportUploadForm({ onClose });

  return (
    <Transition
      appear
      show
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-xl"
      >
        <h2 className="text-xl font-semibold text-gray-900">Додати звіт</h2>

        <ReportUploadFields control={control} errors={errors} />

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              flex-1 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white
              transition
              hover:bg-gray-800
              disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-900
            "
          >
            {isSubmitting ? "Обробка..." : "Зберегти"}
          </button>

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="
              rounded-md border border-gray-300 px-4 py-2 text-sm
              transition
              hover:bg-gray-50
              disabled:cursor-not-allowed disabled:opacity-50
            "
          >
            Скасувати
          </button>
        </div>
      </form>
    </Transition>
  );
};
