import { Button } from "@/components/ui/button"


export default function Home() {
  return (
   <main className=" min-h-screen flex items-center justify-center flex-col gap-10 ">
    <p className="text-5xl">Take token for Ration line</p>
      <Button variant="outline" className="mb-36" >Submit your Ration card</Button>
   </main>
  );
}
