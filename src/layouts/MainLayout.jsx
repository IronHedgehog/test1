import { NavLink, Outlet } from "react-router-dom";

/**
 * Application main layout.
 * Encapsulates shared UI like header, navigation and page container.
 */

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <nav className="flex items-center gap-6">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Звітність
            </NavLink>
          </nav>
        </div>
      </header>

      <main className=" flex-grow mx-auto max-w-5xl px-4 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Hell’s Kitchen Ukraine
        </div>
      </footer>
    </div>
  );
};
