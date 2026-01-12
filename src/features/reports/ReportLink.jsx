/**
 * Reusable link component for PDF reports.
 * Encapsulates:
 *  - correct accessibility
 *  - security attributes
 *  - consistent styling
 */

export const ReportLink = ({ label, file }) => {
  if (!file) {
    return <span className="text-sm text-gray-400">{label} (недоступний)</span>;
  }

  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-md border border-gray-300
        px-4 py-2
        text-sm font-medium text-gray-700
        hover:bg-gray-100
        transition-colors
      "
    >
      {label}
      <span className="text-xs text-gray-500">(PDF)</span>
    </a>
  );
};
