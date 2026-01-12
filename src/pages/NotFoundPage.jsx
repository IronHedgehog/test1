import { Link } from "react-router-dom";

/**
 * Fallback page for unknown routes.
 */

export const NotFoundPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-gray-600">Сторінку не знайдено</p>

      <Link
        to="/reports"
        className="mt-6 inline-block rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Повернутись до звітів
      </Link>
    </div>
  );
};
