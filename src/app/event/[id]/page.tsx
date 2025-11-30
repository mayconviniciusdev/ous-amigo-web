import * as api from "@/api/web";
import { Search } from "@/components/search";
import { redirect } from "next/navigation";

type Props = {params: {id: string}}

const Page = async ({params}: Props) => {
  const { id } = await params;
  const eventItem = await api.getEvent(parseInt(id));
  if(!eventItem || !eventItem.status) return redirect('/');

  return (
    <main className="text-left mx-auto max-w-lg flex flex-col h-screen justify-center">
      <img src="/logo.png" alt="Logo" className="w-80 object-contain mb-8"/>

      <div className="border-2 border-[#004369] rounded-2xl">
        <div className="p-8">
          <h1 className="text-4xl">{eventItem.title}</h1>
          <p className="text-zinc-400 mb-10">{eventItem.description}</p>
          <p className="text-xl mb-2">Quem está participando?</p>

          <table className="w-full">
            <tbody>
              {eventItem.people?.map((person) => (
                <tr key={person.id}  className="border-b-2 border-[#004369] last:border-b-0">
                  <td className="py-4 pl-2 text-sm">{person.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Search id={eventItem.id}/>
      </div>
    </main>
  )
}

export default Page;