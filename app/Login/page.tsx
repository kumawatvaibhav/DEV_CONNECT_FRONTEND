"use client"
import { useState } from "react";
// import { Routes, useNavigate  } from 'react-router-dom';
import axios from "axios";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import icon from "../favicon.ico";

export default function Component() {
  
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormValueChange = (e) => {
    if(e.target.id === 'email'){
      setEmail(e.target.value);
    } 
    if(e.target.id === 'password'){
      setPassword(e.target.value);
    }
  }
  
  const login = () => {

    const options = {
      method: 'POST',
      url: 'http://localhost:3001/api/login',
      headers: {'Content-Type': 'application/json'},
      data: {email, password}
    };

    axios.request(options).then(function (response) {
      alert("succesfully logged in")
      const responseData = response.data;
      const propName = 'token'; 
      const propertyValue = responseData[propName];
      sessionStorage.setItem('jwtToken', propertyValue);
      const decodedToken = atob(propertyValue?.split?.('.')?.[1]);
      sessionStorage.setItem("userId", JSON.parse(decodedToken)?.user?._id);
      sessionStorage.setItem("emailId", JSON.parse(decodedToken)?.user?.email);

      console.log(response.data);
      window.location.href = '/';
    }).catch(function (error) {
      alert("Something went wrong")
      console.error(error);
    });

    // useEffect(() => {
    //   axios.get(options.url).then((response) => {
          
    //       // Redirect to home page using navigate
    //       navigate('/'); // Redirect to the home page
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }, []);

  }

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
              <Input onChange={handleFormValueChange} id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input onChange={handleFormValueChange} id="password" placeholder="••••••••" type="password" />
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
            <Button onClick={login} className="w-full" type="submit">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




