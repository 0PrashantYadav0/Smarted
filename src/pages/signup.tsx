import SignupForm from "@/components/SignUpForm"
import PurpleWave from "@/components/PurpleWave"

export default function SignupPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
      <div className="w-full max-w-2xl transform rounded-lg bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl z-10">
        <h1 className="mb-6 text-center text-3xl font-bold text-purple-800">Create an Account</h1>
        <SignupForm />
      </div>
      <PurpleWave />
    </div>
  )
}

