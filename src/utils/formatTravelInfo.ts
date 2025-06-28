// src/utils/formatTravelInfo.ts
export function formatTravelInfo(activity) {
  const distance = activity.distance?.toFixed(1) ?? '?';
  return activity.travel_time
    ? `${distance} km away (${activity.travel_time})`
    : `${distance} km away`;
}
