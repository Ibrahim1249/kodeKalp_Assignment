
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  return (
    <>
     <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
   
          <div className="text-xl font-bold">
            <span className="text-blue-500">Dark</span>Theme
          </div>
          <Button variant="ghost" className="text-white hover:text-blue-500">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      <main
        className="container mx-auto flex items-center justify-center flex-grow min-h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold text-center">
          Hello, <span className="text-blue-500">username</span>!
        </h1>
      </main>
    </div>
    </>
  );
}