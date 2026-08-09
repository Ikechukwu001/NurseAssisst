export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-navy-800">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-lg border ${
          error ? "border-red-400" : "border-navy-100"
        } bg-white px-4 py-3 text-navy-950 outline-none transition-colors focus:border-navy-500 focus:ring-2 focus:ring-navy-100 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}