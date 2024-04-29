import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import icon from "../favicon.ico";

export default function Component() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <Card className="mx-auto max-w-sm flex-2">
          <CardHeader className="space-y-1">
            <CardTitle>Welcome to Dev-Connect</CardTitle>
            <CardDescription>Enter your credentails </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" placeholder="••••••••" type="password" />
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="create account?" className="text-sm">
                        don't have an account?
                    </Label>
                    <Link href="/register" className="text-sm">
                        Signup
                    </Link>
                </div>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




