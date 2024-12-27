import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openGoogleMap = () => {
  let latLon = [8.240166189309809, 77.52512889748944];

  window.open(
    `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=${latLon[0]},${latLon[1]}&travelmode=driving`,
    "_blank"
  );
};
