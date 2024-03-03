import { Occurrence } from "./types";

export const BASE_URL = "http://localhost:3000";

export async function createOccurence(occurrence: Occurrence) {
  const result = await fetch(`${BASE_URL}/ocurrence`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(occurrence),
  });
}

export async function consultOccurence(userId: string) {
  const response = await fetch(`${BASE_URL}/ocurrence`, {
    body: JSON.stringify(userId),
  });
  const result = await response.json();
  return result;
}

export async function consultOccurrences(userId: string) {
  const response = await fetch(`${BASE_URL}/ocurrences`, {
    body: JSON.stringify(userId),
  });
  const result = await response.json();
  return result;
}
