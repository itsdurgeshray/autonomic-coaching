export type AccountSkeletonProps = { label: string };

/** Placeholder in the shape of the account page while the saved session is read */
export function AccountSkeleton({ label }: AccountSkeletonProps) {
  return (
    <div className="min-h-svh" aria-busy="true">
      <span className="sr-only">{label}</span>
      <div aria-hidden="true" className="bg-[#e4f1ea]">
        <div className="mx-auto flex max-w-[1312px] items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <span className="ds-skel h-9 w-44 rounded-[8px]" />
          <span className="ds-skel size-10 rounded-full" />
        </div>
        <div className="mx-auto max-w-[1312px] px-4 pt-6 pb-10 md:px-8 md:pt-10 md:pb-12">
          <span className="ds-skel block h-6 w-32 rounded-[6px]" />
          <span className="ds-skel mt-2 block h-9 w-56 rounded-[8px]" />
          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="block h-[120px] rounded-[16px] bg-white/60" />
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto max-w-[1312px] px-4 pt-8 md:px-8 md:pt-10">
        <span className="ds-skel block h-[104px] rounded-[16px]" />
        <span className="ds-skel mt-6 block h-[360px] rounded-[16px]" />
      </div>
    </div>
  );
}
