import LoginForm from "@/components/LoginForm"
import PurpleWave from "@/components/PurpleWave"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="w-full max-w-md transform rounded-lg bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl z-10">
        <h1 className="mb-6 text-center text-3xl font-bold text-purple-800">Welcome Back</h1>
        <LoginForm />
      </div>
      <PurpleWave />
    </div>
  )
}
