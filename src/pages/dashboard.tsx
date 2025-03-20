import { useSelector } from "react-redux";

export default function DashboardPage() {
  const user = useSelector((state) => state.auth.userData);
  console.log(user)
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md">
            <h1 className="mb-6 text-center text-3xl font-bold">Dashboard</h1>
            <p className="text-center">Welcome to the dashboard</p>
        </div>
    </div>
    </>
  )
}

