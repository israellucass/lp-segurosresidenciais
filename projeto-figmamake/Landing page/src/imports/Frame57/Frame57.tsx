import svgPaths from "./svg-h16oqy4yo4";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#00cefe] content-stretch flex h-[62px] items-center justify-center left-[calc(50%+323px)] px-[38px] py-[14px] rounded-[15px] top-[24px] w-[392px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#15162c] text-[26px] whitespace-nowrap">Fale conosco</p>
    </div>
  );
}

function EquatorialSeta() {
  return (
    <div className="absolute h-[42px] left-[525px] top-[34px] w-[100px]" data-name="Equatorial Seta">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 42">
        <g id="Equatorial Seta">
          <rect fill="var(--fill-0, #15162C)" height="42" id="Rectangle 59" rx="21" width="100" />
          <path d={svgPaths.p122e2a80} fill="var(--stroke-0, #00CEFE)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="absolute border-2 border-[#15162c] border-solid h-[110px] left-0 rounded-[32px] top-0 w-[1116px]" />
      <Frame />
      <p className="absolute font-['Bricolage_Grotesque:Medium',sans-serif] font-medium h-[42px] leading-[62px] left-[49px] text-[#15162c] text-[32px] top-[25px] tracking-[-0.96px] w-[441px]" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        Quero contratar o benefício
      </p>
      <EquatorialSeta />
    </div>
  );
}