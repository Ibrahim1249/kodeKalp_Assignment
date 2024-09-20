
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



export function Dashboard() {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.post('https://kodekalp-assignment-wvts.onrender.com/api/v1/logout', null, { withCredentials: true });
       if(response.status == 200){
        navigate('/login');
       }
      
    } catch (error) {
      console.log('Logout error:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      })
    }
  };

  return (
    <>
     <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
   
          <div className="text-xl font-bold">
            <span className="text-blue-500">SMTP</span>
          </div>
          <Button variant="ghost" className="text-white hover:text-blue-500" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      <main
        className="container mx-auto flex items-center justify-center flex-grow min-h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold text-center">
          Hello, <span className="text-blue-500">{user && user?.username}</span>!
        </h1>
      </main>
    </div>
    </>
  );
}