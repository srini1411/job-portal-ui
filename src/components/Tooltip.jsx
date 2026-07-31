import { useId, useState } from "react";

const Tooltip = ({ title, content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <span
      className="relative inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70"
      tabIndex={0}
      aria-describedby={isVisible ? tooltipId : undefined}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={(e) => {
        if (e.key === "Escape") hide();
      }}
    >
      {children}

      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 w-[min(18rem,calc(100vw-3rem))] animate-scaleIn"
        >
          <div className="relative overflow-hidden rounded-xl border border-gray-700/60 bg-gray-800/95 backdrop-blur-sm shadow-2xl px-4 py-3 text-left">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500"></div>
            <div className="text-sm font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent mb-1">
              {title}
            </div>
            <p className="text-xs leading-relaxed text-gray-300 normal-case">
              {content}
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3 h-3 rotate-45 bg-gray-800/95 border-r border-b border-gray-700/60"></div>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
