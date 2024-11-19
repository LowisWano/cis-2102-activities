import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register, login } from "@/services/auth.service";

export function RegisterForm() {
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const field = e.target;
    const user = await register({
      email: field.email.value,
      name: field.name.value,
    })
    const userToken = await login({
      email: field.email.value
    });
    window.localStorage.setItem("token", JSON.stringify(userToken));
    navigate("/");
  }

  return (
    <Card className="mx-auto max-w-sm">
        <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
                Enter your information to create an account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={registerHandler}>
              <div className="grid gap-4">
                  <div className="grid gap-4">
                      <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" placeholder="Enter email" required />
                      </div>
              
                  </div>
                  <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                          id="name"
                          name="name"
                          placeholder="Enter name"
                          required
                      />
                  </div>
                  <Button type="submit" className="w-full">
                      Create an account
                  </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                      Sign in
                  </Link>
              </div>
            </form>
        </CardContent>
    </Card>
  );
}
