import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { showToast } from "@/lib/toast";
import { UserRole } from "@/types";

export default function ConfirmSignUpPage() {
  const location = useLocation();
  const router = useNavigate();

  const { confirmSignUp, signIn } = useAuth();

  const email = location.state!.email as string;
  const userId = location.state!.userId as string;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const code = formData.get("code") as string;

      console.log("submitting form");
      console.log(email, code);

      const { isSignUpComplete } = await confirmSignUp(email, code, userId);

      console.log("Signed in successfully", isSignUpComplete);

      showToast("Successfully signed up!", "success");

      return isSignUpComplete;
    } catch (error: any) {
      showToast(error.message, "error");
      console.error(error);
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Confirm Sign Up</CardTitle>
          <CardDescription>
            Please enter the verification code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Input
                name="code"
                type="text"
                placeholder="Enter verification code"
                autoComplete="off"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full font-bold text-lg"
            >
              Verify
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
