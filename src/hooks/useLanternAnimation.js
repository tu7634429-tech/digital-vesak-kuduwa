export default function useLanternAnimation(index = 0) {
  const left = 6 + ((index * 18) % 86);
  const duration = 18 + (index % 8);
  const delay = index * 1.05;

  return {
    left,
    duration,
    delay,
  };
}