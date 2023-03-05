const reachDestination = (distance, speed) => {
const reachTime = distance / speed;
const roundedTime = Math.round(reachTime / 0.5) * 0.5;
const formattedTime = roundedTime.toFixed(1);
return `I should be there in ${formattedTime} hours.`;
};

module.exports = reachDestination;