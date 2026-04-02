export function formatTransactionDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (diffDays < 1) return "Today";
  if (diffDays < 2) return "Yesterday";
  if (diffDays < 7) return dayNames[date.getDay()];

  return date.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });
}

export function formatDetailDate(dateStr: string): string {
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    }) +
    ", " +
    date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
  );
}

export function formatAmount(
  amount: number,
  type: "Payment" | "Credit",
): string {
  const formatted = "$" + amount.toFixed(2);
  return type === "Payment" ? "+" + formatted : formatted;
}

function getSeasonStart(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed

  // Spring: Mar 1, Summer: Jun 1, Autumn: Sep 1, Winter: Dec 1
  if (month >= 11) return new Date(year, 11, 1); // Dec 1
  if (month >= 8) return new Date(year, 8, 1); // Sep 1
  if (month >= 5) return new Date(year, 5, 1); // Jun 1
  if (month >= 2) return new Date(year, 2, 1); // Mar 1
  return new Date(year - 1, 11, 1); // Dec 1 previous year
}

function computePoints(dayOfSeason: number): number {
  // dayOfSeason is 1-indexed
  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;

  let prev2 = 2; // day 1
  let prev1 = 3; // day 2
  for (let d = 3; d <= dayOfSeason; d++) {
    const current = prev2 + 0.6 * prev1;
    prev2 = prev1;
    prev1 = current;
  }
  return Math.round(prev1);
}

export function getDailyPoints(): string {
  const now = new Date();
  const seasonStart = getSeasonStart(now);
  const msPerDay = 1000 * 60 * 60 * 24;
  const dayOfSeason =
    Math.floor((now.getTime() - seasonStart.getTime()) / msPerDay) + 1;

  const points = computePoints(dayOfSeason);
  return points >= 1000 ? Math.round(points / 1000) + "K" : String(points);
}
