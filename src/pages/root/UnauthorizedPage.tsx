import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function UnauthorizedPage() {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
            <Card className="max-w-md w-full">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                        <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                            <AlertCircle className="h-10 w-10 text-destructive" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Unauthorized Access</h1>
                </CardHeader>
                <CardContent>
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Access Denied</AlertTitle>
                        <AlertDescription>
                            You don't have permission to access this page. Please contact your administrator 
                            if you believe this is a mistake.
                        </AlertDescription>
                    </Alert>
                </CardContent>
                <CardFooter className="flex w-full">
                   
                    <Button
                     className="w-full" 
                        variant="default"
                        onClick={() => navigate("/dashboard")}
                    >
                        Go to Dashboard
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}