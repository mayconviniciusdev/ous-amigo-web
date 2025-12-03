type Props = {
  value: string;
  onClick: () => void;
  disabled?: boolean;
}
export const Button = ({value, onClick, disabled}: Props) => {
  return (
    <div>
      <button
      onClick={onClick}
      className="cursor-pointer w-full my-3 p-3 rounded bg-gray-700 text-[#F6F6F6] font-bold hover:bg-gray-600 border-b-4 border-white/10"
      disabled={disabled}>
        {value}
      </button>
    </div>
  )
}