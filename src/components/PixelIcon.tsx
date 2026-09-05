const bitmaps = {
  exclaim: [
    ".XXX.",
    ".XXX.",
    ".XXX.",
    ".XXX.",
    ".XXX.",
    ".....",
    ".XXX.",
    ".XXX.",
  ],
  chevron: [
    "X.....",
    "XX....",
    ".XX...",
    "..XX..",
    "..XX..",
    ".XX...",
    "XX....",
    "X.....",
  ],
  burst: [
    "....X....",
    "....X....",
    "X..XXX..X",
    ".X.XXX.X.",
    "..XXXXX..",
    ".X.XXX.X.",
    "X..XXX..X",
    "....X....",
    "....X....",
  ],
} as const;

interface PixelIconProps {
  shape: keyof typeof bitmaps;
  size?: number;
  className?: string;
  colorClassName?: string;
}

export function PixelIcon({ shape, size = 6, className = "", colorClassName = "bg-yellow-400" }: PixelIconProps) {
  const bitmap = bitmaps[shape];
  const cols = bitmap[0].length;

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridAutoRows: `${size}px`,
      }}
    >
      {bitmap.flatMap((row, ri) =>
        row.split("").map((cell, ci) => (
          <div key={`${ri}-${ci}`} className={cell === "X" ? colorClassName : ""} />
        ))
      )}
    </div>
  );
}
