import { ReportLink } from "./ReportLink";

/**
 * Represents reports for a single year.
 * Uses semantic HTML for accessibility and SEO.
 */

export const ReportYearCard = ({ year, activityReport, financialReport }) => {
  return (
    <article className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">{year}</h2>

      <div className="flex flex-col gap-3 sm:flex-row">
        <ReportLink label={activityReport.label} file={activityReport.file} />
        <ReportLink label={financialReport.label} file={financialReport.file} />
      </div>
    </article>
  );
};
