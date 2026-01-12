import { REPORTS } from "../../api/reports.data";
import { ReportYearCard } from "./ReportYearCard";

/**
 * Renders a list of report years.
 * Data-driven rendering, no hardcoded years.
 */

export const ReportsList = () => {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Звітність фонду</h1>
      <p className="mt-3 mb-3 max-w-2xl text-gray-600">
        Тут ви можете ознайомитися з фінансовою та діяльнісною звітністю фонду
        за відповідні роки.
      </p>

      {REPORTS.map((report) => (
        <ReportYearCard
          key={report.id}
          year={report.year}
          activityReport={report.activityReport}
          financialReport={report.financialReport}
        />
      ))}
    </section>
  );
};
