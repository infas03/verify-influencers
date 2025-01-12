import { Minus, ArrowUp2, ArrowDown2 } from "iconsax-react";

export const getTrendIcon = (trend: string | undefined) => {
  switch (trend) {
    case "up":
      return <ArrowUp2 size="20" color="#059669" />;
    case "down":
      return <ArrowDown2 size="20" color="#EF4444" />;
    default:
      return <Minus size="20" color="#9CA3AF" />;
  }
};