export function BoxStakingContentForm() {
  return (
    <form className="w-full mt-10 flex flex-col">
      <strong className="text-xs font-semibold text-white">Input GALI</strong>
      <label className="rounded-lg mt-5 h-10 p-[1px]">
        <input className="placeholder-slate-400 focus:outline-none focus:border-2 border-rose-600 rounded-lg w-full h-full bg-gray-600 px-2 text-xs font-semibold text-white" type="number" placeholder=" 0.00" />
      </label>
    </form>
  );
}
