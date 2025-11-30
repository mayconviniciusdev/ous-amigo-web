import { req } from './axios';
import { Event } from '@/types/events';
import { SearchResult } from '@/types/searchResult';

export const getEvent = async (id: number): Promise<Event | false> => {
  const json = await req.get(`/events/${id}`);
  const peopleJson = await req.get(`/events/${id}/people`);

  const event: Event | undefined = json.data.events.find((e: Event) => e.id === id);
  if (!event) return false;

  event.people = peopleJson.data.people ?? [];

  return event;
}

export const searchCPF = async (eventId: number, cpf: string): Promise<SearchResult | false> => {
  const json = await req.get(`/events/${eventId}/search?cpf=${cpf}`);
  if(json.data.person && json.data.personMatched) return json.data as SearchResult;

  return false;
}