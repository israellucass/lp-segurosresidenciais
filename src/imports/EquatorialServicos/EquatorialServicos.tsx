import svgPaths from "./svg-5iyettytq9";

function Group1() {
  return (
    <div className="absolute inset-[77.65%_32.53%_0_32.54%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.7304 10.73">
        <g id="Group">
          <path d={svgPaths.pee36e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14572580} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p26bbab00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p22bcff00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p61f1e00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1e0cabc0} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p36bfa700} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p37dc1340} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[35.67%_9.04%_29.78%_9.04%]" data-name="g4544">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.085 16.5825">
        <g id="g4544">
          <path d={svgPaths.p34b07300} fill="var(--fill-0, white)" id="path4546" />
          <path d={svgPaths.p26f9c380} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2ff959f0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function G1() {
  return (
    <div className="absolute inset-[0_0_48.63%_0]" data-name="g4548">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171 24.6595">
        <g id="g4548">
          <path d={svgPaths.p2ec0acc0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p119fa980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_0_29.78%_0]" data-name="Group">
      <G />
      <G1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute contents inset-0" data-name="svg8">
      <Group />
    </div>
  );
}

export default function EquatorialServicos() {
  return (
    <div className="relative size-full" data-name="EquatorialServicos">
      <Svg />
    </div>
  );
}