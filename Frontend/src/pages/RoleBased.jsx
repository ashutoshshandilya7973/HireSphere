import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react"
import { Users, Briefcase } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { supabase } from '../utils/supabase.js'
export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null)
  const { user } = useUser(null)
  const navigate = useNavigate()
  const handleRoleSelect = async (role) => {
    console.log(user.id)
    console.log(Clerk.session?.getToken())
    const { error } = await supabase.from('profiles').insert([{
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      role: role
    }]);

    if (error) {
      console.log(error)
      return;
    }
    setSelectedRole(role)

  }

  useEffect(() => {
    if (user) {
      user.update({
        unsafeMetadata: {
          "role": selectedRole
        }
      })

      if (selectedRole === "hr") {
        navigate('/admin-dashboard', { replace: true })
      }
      console.log(user)
    }
  }, [selectedRole])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome</h1>
          <p className="text-muted-foreground">Please select your role to continue</p>
        </div>

        <div className="grid gap-4">
          <Card
            className={`cursor-pointer transition-all hover:shadow-md ${selectedRole === "hr" ? "ring-2 ring-primary" : ""
              }`}
            onClick={() => handleRoleSelect("hr")}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>HR Professional</CardTitle>
              <CardDescription>Post jobs, manage applications, and find the right candidates</CardDescription>
            </CardHeader>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-md ${selectedRole === "jobseeker" ? "ring-2 ring-primary" : ""
              }`}
            onClick={() => handleRoleSelect("jobseeker")}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Job Seeker</CardTitle>
              <CardDescription>Browse opportunities, apply for jobs, and advance your career</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {selectedRole && (
          <Button className="w-full" onClick={() => handleRoleSelect(selectedRole)}>
            Continue as {selectedRole === "hr" ? "HR Professional" : "Job Seeker"}
          </Button>
        )}
      </div>
    </div>
  )
}
