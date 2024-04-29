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
            <CardTitle>Sign Up to Dev-Connect</CardTitle>
            <CardDescription>Create Your Account </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName"  type="text" />
              </div>
            </div>
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
                  Have an account?
                </Label>
                <Link href="/Login" className="text-sm">
                  Login
                </Link>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}





