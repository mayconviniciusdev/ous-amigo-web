import { Person } from "./person";

export type Event = {
  id: number;
  status: boolean;
  title: string;
  description: string;
  grouped: boolean;
  people: Person[];
}