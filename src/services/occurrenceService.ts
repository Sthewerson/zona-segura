import axios from "axios";
import { CreateOccurrenceDto, Occurrence } from "../entity/Occurrence";

export class OccurrenceService {
  async createOccurrence(data: CreateOccurrenceDto, token: string) {
    const response = await axios.post(
      "https://back-zonasegura.onrender.com/ocurrence",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status >= 400) {
      throw new Error(response.data);
    }
    return new Occurrence(response.data);
  }

  async consultOccurrence(id: string, token: string) {
    const response = await axios.get(
      `https://back-zonasegura.onrender.com/occurrence/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status >= 400) {
      throw new Error(response.data);
    }
    return new Occurrence(response.data);
  }

  async consultAllOccurrences(token: string): Promise<Occurrence[]> {
    const response = await axios.get(
      "https://back-zonasegura.onrender.com/occurrences",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status >= 400) {
      throw new Error(response.data);
    }
    return response.data;
  }
}
