import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { REPORT_TYPES } from "../../constants/report-types";
import { DropzoneField } from "./DropzoneField";
import { reportSchema } from "./report.schema";

export const ReportUploadForm = ({ onClose }) => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      year: "",
      type: "",
      file: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      toast.loading("Підготовка звіту...", { id: "upload" });

      // mock delay (імітація API)
      await new Promise((res) => setTimeout(res, 1200));

      console.log("Mock payload:", data);

      toast.success("Звіт успішно підготовлено", { id: "upload" });
      reset();
      onClose?.();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Помилка під час обробки", { id: "upload" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl space-y-6 rounded-lg border border-gray-200 p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900">Додати звіт</h2>

      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <DropzoneField
            value={field.value}
            onChange={field.onChange}
            error={errors.file}
          />
        )}
      />

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Рік звіту
        </label>
        <input
          type="number"
          {...register("year")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        {errors.year && (
          <p className="mt-1 text-sm text-red-600">{errors.year.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Тип звіту
        </label>
        <select
          {...register("type")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Оберіть тип</option>
          {REPORT_TYPES.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.type && (
          <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
        >
          {isSubmitting ? "Обробка..." : "Зберегти"}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm"
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};
