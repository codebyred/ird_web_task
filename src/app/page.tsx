import CategoryBar from "@/components/categorybar";
import Header from "@/components/header";
import MiddleSection from "@/components/middle-section";
import SettingsBar from "@/components/settingsbar";


export default function Home() {
  return (
    
    
    <main className="h-full w-full sm:ml-[4.25rem]">
      <Header />
      <div className="h-full grid grid-cols-5 ">
        <CategoryBar/>
        <MiddleSection/>
        <SettingsBar/>
      </div>
     
    </main>
  )
}