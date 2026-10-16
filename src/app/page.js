import Image from "next/image";

export default function Home() {
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl text-amber-600 my-3">Task add, Form Structure</h1>
      <ui>
        <li className="text-red-700">HeroUi</li>
        <li className="text-red-700">Theme- Switch</li>
        <li className="text-red-700">Gravity Ui icons</li>
        <li className="text-red-700">Modal</li>
        <li className="text-red-700">Sidebar</li>
        <li className="text-red-700">Mutating Data- Changeable data</li>
        <li className="text-red-700 text-2xl font-bold">From Component</li>
        <li className="text-red-700">use server</li>
        <li className="text-red-700">use client</li>
        <li className="text-red-700 text-2xl">isRequired</li>
        <li className="text-red-700 text-2xl">validate</li>
        <li className="text-red-700 text-2xl">FieldError Tag3</li>
      </ui>
    </div>
  );
}
