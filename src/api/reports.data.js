/**
 * Centralized configuration for public reports.
 *
 * This file intentionally contains ONLY data, no UI logic.
 * Such separation allows:
 *  - easy content updates without touching components
 *  - future migration to CMS or API without refactoring UI
 */

export const REPORTS = [
  {
    id: "2025",
    year: 2025,
    activityReport: {
      label: "Звіт про діяльність",
      file: "/reports/2025/activity-report-2025.pdf",
    },
    financialReport: {
      label: "Фінансовий звіт",
      file: "/reports/2025/financial-report-2025.pdf",
    },
  },
  {
    id: "2024",
    year: 2024,
    activityReport: {
      label: "Звіт про діяльність",
      file: "/reports/2024/activity-report-2024.pdf",
    },
    financialReport: {
      label: "Фінансовий звіт",
      file: "/reports/2024/financial-report-2024.pdf",
    },
  },
];
