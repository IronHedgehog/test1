import { useDropzone } from "react-dropzone";

/**
 * Form-controlled dropzone field.
 * Integrates react-dropzone with react-hook-form.
 */

export const DropzoneField = ({ value, onChange, error }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles[0]);
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`
        cursor-pointer rounded-lg border-2 border-dashed p-8 text-center
        transition-colors
        ${isDragActive ? "border-gray-900 bg-gray-100" : "border-gray-300"}
        ${error ? "border-red-400 bg-red-50" : ""}
      `}
    >
      <input {...getInputProps()} />

      {value ? (
        <>
          <p className="font-medium text-gray-900">{value.name}</p>
          <p className="text-sm text-gray-500">
            {(value.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </>
      ) : (
        <>
          <p className="font-medium text-gray-700">Перетягніть PDF-файл сюди</p>
          <p className="text-sm text-gray-500">або натисніть для вибору</p>
        </>
      )}

      {error && <p className="mt-3 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
