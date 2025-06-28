// helper to format distance and travel time
const formatTravelInfo = (activity) => {
  const distance = activity.distance.toFixed(1);
  
  // If travel_time exists, use it; otherwise fall back to just distance
  if (activity.travel_time) {
    return `${distance} km away (${activity.travel_time})`;
  }
  
  return `${distance} km away`;
};
