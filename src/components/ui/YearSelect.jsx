import { Select } from "./Select";

export const YearSelect = ({ value, onChange, years, error }) => {
  const options = years.map((year) => ({
    value: year,
    label: String(year),
  }));

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      placeholder="Оберіть рік"
      error={error}
    />
  );
};
