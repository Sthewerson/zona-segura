export type CreateOccurrenceDto = Omit<Occurrence, "id">;

export type IOccurence = Required<Occurrence>;

export class Occurrence {
  id: string;
  date: Date;
  genrer: string | null;
  local: string;
  subject: string;
  constructor(data: IOccurence) {
    (this.id = data.id),
      (this.date = data.date),
      (this.genrer = data.genrer),
      (this.local = data.local),
      (this.subject = data.subject);
  }
}
