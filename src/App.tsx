import "./App.css";
import SidebarWrapper from "./components/wrapper/sidebar-wrapper";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  console.log("masok");

  return (
    <SidebarWrapper>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Skeleton className="w-full h-52" />
        <Skeleton className="w-full h-52" />
        <Skeleton className="w-full h-52" />
        <Skeleton className="w-full h-52" />
        <Skeleton className="w-full h-72 col-span-2 md:col-span-4" />
        <Skeleton className="w-full h-52 col-span-2" />
        <Skeleton className="w-full h-52 col-span-2" />
      </div>
    </SidebarWrapper>
  );
}

export default App;
