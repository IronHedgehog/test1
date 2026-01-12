import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export const Select = ({
  value,
  onChange,
  options,
  placeholder,
  error,
  disabled = false,
}) => {
  const selectedOption = options.find((o) => o.value === value);

  return (
    <div className="relative">
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <Listbox.Button
          className={`
            relative w-full cursor-pointer rounded-md border bg-white px-3 py-2 pr-10 text-left text-sm
            transition-colors
            ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-gray-900"
            }
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          `}
        >
          <span
            className={`block truncate ${
              selectedOption ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {selectedOption?.label ?? placeholder}
          </span>

          <ChevronUpDownIcon
            className="
              pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400
              transition-transform
              ui-open:rotate-180
            "
          />
        </Listbox.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Listbox.Options
            className="
              absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md
              border border-gray-200 bg-white py-1 text-sm shadow-lg
              focus:outline-none
            "
          >
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `
                    relative cursor-pointer select-none py-2 pl-10 pr-4
                    transition-colors
                    ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}
                  `
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>

                    {selected && (
                      <span className="absolute inset-y-0 left-3 flex items-center text-gray-900">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>

      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
