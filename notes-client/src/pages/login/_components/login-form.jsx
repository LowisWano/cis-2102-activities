import { Link } from "react-router-dom";
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
import { useNavigate } from "react-router-dom"
import { login } from "@/services/auth.service";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const navigate = useNavigate();
  const { toast } = useToast()

  const loginHandler = async (event) => {
    event.preventDefault();
    const field = event.target;

    try{
      const userToken = await login({
        email: field.email.value
      });
      window.localStorage.setItem("token", JSON.stringify(userToken));
      navigate("/");
    }catch(err){
      console.log("Verify your email and try again.");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Verify your email and try again. If you don't have an account, sign up for one!",
      }) 
    }
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={loginHandler}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                name='email'
                placeholder="Enter email"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
