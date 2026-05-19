import videoThumbnail from "../../imports/CleanShot_2026-05-13_at_23.40.51_2x.png";
import svgPaths from "../../imports/Site/svg-k7lbb5pc13";

interface VideoPlayerProps {
  onPlay: () => void;
}

export default function VideoPlayer({ onPlay }: VideoPlayerProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ aspectRatio: "1057/601" }}>
      {/* Video Thumbnail */}
      <div className="absolute inset-0 rounded-[15px] overflow-hidden">
        <img
          alt="Video thumbnail"
          className="w-full h-full object-cover"
          src={videoThumbnail}
        />
      </div>

      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] border-[2px] border-[#5FE9D0] rounded-[15px]" />

      {/* Play Button */}
      <button
        onClick={onPlay}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 lg:w-[183px] lg:h-[183px] cursor-pointer transition-transform hover:scale-110"
      >
        <svg className="w-full h-full" fill="none" viewBox="0 0 183 183">
          <path
            d={svgPaths.p19c5f680}
            fill="white"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    </div>
  );
}
