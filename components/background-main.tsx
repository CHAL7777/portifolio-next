export default function BackgroundMain() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 slow-pan bg-[linear-gradient(120deg,rgba(15,107,74,0.11),transparent_34%,rgba(166,120,58,0.08)_64%,rgba(122,31,50,0.05)_92%)] dark:bg-[linear-gradient(120deg,rgba(51,208,138,0.09),transparent_36%,rgba(215,179,106,0.08)_68%,rgba(212,91,116,0.07)_94%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,26,22,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,26,22,0.03)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(243,239,230,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,230,0.03)_1px,transparent_1px)] dark:bg-[size:44px_44px]" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent,rgba(255,250,240,0.22)_46%,transparent_58%)] opacity-40 dark:bg-[linear-gradient(105deg,transparent,rgba(243,239,230,0.08)_46%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background),transparent_18%,transparent_76%,var(--background))]" />
    </div>
  );
}
