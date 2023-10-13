import React from "react";

export default function Nav() {
  return (
    <nav className="flex justify-between px-10 bg-indigo-400 text-white font-semibold py-3 items-center cursor-pointer">
      <ul className="flex gap-3 place-items-center">
        <li>
          <img width={40} src="/keyboard.png" alt="" />
        </li>
        <li className="text-2xl pt-2">CoolKeys</li>
      </ul>

      <ul className="flex gap-3">
        <li className="transition ease-linear px-3 py-2 bg-amber-500 rounded-full hover:bg-amber-400">
          View Keyboards
        </li>
        <li className="transition ease-linear px-3 py-2 bg-amber-500 rounded-full hover:bg-amber-400">
          Create
        </li>
      </ul>
    </nav>
  );
}
