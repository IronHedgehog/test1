import { AddReportSection } from "../features/report-uploads/AddReportForm";
import { ReportsList } from "../features/reports/ReportsList";

/**
 * Public transparency page.
 * Can be safely used as a route-level component.
 */

export const ReportsPage = () => {
  return (
    <>
      <AddReportSection />
      <ReportsList />
    </>
  );
};
