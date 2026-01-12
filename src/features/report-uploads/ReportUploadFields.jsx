import { Controller } from "react-hook-form";

import { Select } from "../../components/ui/Select";
import { YearSelect } from "../../components/ui/YearSelect";
import { REPORT_TYPES } from "../../constants/report-types";
import { getAvailableYears } from "../../utils/getAvailableYears";
import { DropzoneField } from "./DropzoneField";

export const ReportUploadFields = ({ control, errors }) => {
  const years = getAvailableYears();

  return (
    <>
      {/* PDF Upload */}
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

      {/* Year select */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Рік звіту
        </label>

        <Controller
          name="year"
          control={control}
          render={({ field }) => (
            <YearSelect
              value={field.value}
              onChange={field.onChange}
              years={years}
              error={errors.year}
            />
          )}
        />
      </div>

      {/* Report type */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Тип звіту
        </label>

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              placeholder="Оберіть тип"
              options={REPORT_TYPES}
              error={errors.type}
            />
          )}
        />
      </div>
    </>
  );
};
