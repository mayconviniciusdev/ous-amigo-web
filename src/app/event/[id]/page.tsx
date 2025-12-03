import * as api from "@/api/web";
import { Search } from "@/components/web/search";
import { redirect } from "next/navigation";

type Props = {params: {id: string}}

const Page = async ({params}: Props) => {
  const { id } = await params;
  const eventItem = await api.getEvent(parseInt(id));
  if(!eventItem || !eventItem.status) return redirect('/');

  return (
    <main className="text-left mx-auto max-w-lg flex flex-col h-screen justify-center">
      <div className="mx-5">
        <div className="bg-[#1E1E1E] pb-[150px] mx-1 p-8 rounded-t-2xl text-[#F6F6F6]">
          <img src="/logo-OUSamigo.png" alt="Logo" className="w-55 object-contain mb-4"/>
          <h1 className="text-4xl">{eventItem.title}</h1>
          <p className="text-zinc-400 mb-8">{eventItem.description}</p>
          <p className="text-lg mb-2">Quem está participando?</p>

          <table className="w-full">
            <tbody>
              {eventItem.people?.map((person) => (
                <tr key={person.id} className="border-2 border-zinc-700 bg-zinc-800">
                  <td className="py-4 pl-2 text-sm text-white/50">{person.name}</td>
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