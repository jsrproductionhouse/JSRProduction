// components/Loader.jsx
import React from "react";
import { PulseLoader } from "react-spinners";

/**
 * Loader
 * Props:
 * - loading: boolean (controls visibility)
 * - size: number | default 10
 * - color: string | default Tailwind slate-700-ish
 * - text: optional string shown below spinner
 * - centerFull: boolean -> if true, center to full screen; otherwise inline center
 */
const Loader = ({
  loading = true,
  size = 10,
  color = "#374151", // slate-700 hex (Tailwind slate-700)
  text = "Loading...",
  centerFull = true,
}) => {
  if (!loading) return null;

  const containerClass = centerFull
    ? "fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
    : "flex items-center justify-center";

  return (
    <>
      <PulseLoader
        color={color}
        loading={loading}
        size={size}
        margin={6}
        aria-label="Loading"
        data-testid="loader"
      />
      {text && (
        <span className="text-sm text-gray-700 dark:text-gray-200">{text}</span>
      )}
    </>
  );
};

export default Loader;
