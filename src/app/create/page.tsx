import { getAuthSession } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/CreateCourseForm";

type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/gallery");
  }
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        Learning
      </h1>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
        Masukkan judul kursus, atau apa yang ingin Anda pelajari. Kemudian 
        masukkan daftar unit, yang merupakan hal spesifik yang ingin Anda pelajari. 
        Dan AI kami akan membuatkan kursus untuk Anda!
        </div>
      </div>

      <CreateCourseForm />
    </div>
  );
};

export default CreatePage;