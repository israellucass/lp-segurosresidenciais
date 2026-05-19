import svgPaths from "./svg-9o0q55vta6";
import imgEqtl022 from "./104e1e4a698221172b9b690e52f3afe701bcce0b.png";
import imgRectangle59 from "./e4abce22687191cb89f26ebbe3dd3fe5d8aa26c5.png";
import { imgRectangle58 } from "./svg-j38u9";

function MaskGroup() {
  return (
    <div className="absolute contents left-[431.35px] top-[232px]" data-name="Mask group">
      <div className="absolute h-[659px] left-[381px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.352px_29px] mask-size-[1057.297px_601px] top-[203px] w-[1158px]" style={{ maskImage: `url('${imgRectangle58}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle59} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[431.35px] top-[232px]">
      <MaskGroup />
      <div className="absolute bg-[rgba(0,0,0,0.6)] border-[#00cefe] border-[1.929px] border-solid h-[601px] left-[431.35px] rounded-[15.435px] top-[232px] w-[1057.297px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c3cbd5] content-stretch flex items-center justify-center left-1/2 px-[8px] top-[860px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[60px] not-italic relative shrink-0 text-[#011537] text-[48px] text-center tracking-[-0.96px] whitespace-nowrap">Você pode ser o próximo!</p>
    </div>
  );
}

function IconoirPlaySolid() {
  return (
    <div className="absolute left-[868px] size-[183px] top-[460px]" data-name="iconoir:play-solid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 183">
        <g id="iconoir:play-solid">
          <path d={svgPaths.p19c5f680} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#052067] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
          <p className="font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold leading-[90px] relative shrink-0 text-[72px] text-center text-white tracking-[-1.44px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            Sorte que Transforma
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#052067] content-stretch flex items-center justify-center px-[8px] relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Concorra a prêmios mensais com seus números da sorte</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[604px] top-[66px] w-[692px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function Secao() {
  return (
    <div className="relative size-full" data-name="SEÇÃO_4">
      <div className="absolute bg-[#000d3c] h-[1040px] left-[-55px] top-[-30px] w-[2030px]" />
      <div className="absolute h-[980px] left-[-444px] top-0 w-[2808px]" data-name="EQTL02 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[174.27%] left-[-2.5%] max-w-none top-[-10.76%] w-[105%]" src={imgEqtl022} />
        </div>
      </div>
      <Group />
      <Frame3 />
      <IconoirPlaySolid />
      <Frame2 />
    </div>
  );
}