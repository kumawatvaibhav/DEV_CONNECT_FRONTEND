"use client";

import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Head from "next/head";
import icon from "../favicon.ico";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Label } from "@radix-ui/react-dropdown-menu";
import { PencilIcon, TwitterIcon, GithubIcon, LinkedinIcon, MoreHorizontalIcon, LocateIcon, UserIcon, CalendarIcon } from "lucide-react";
import { getUserData, getproject_data } from "@/lib/data_project";
import { Skeleton } from "@nextui-org/skeleton";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Component() {
  const [userData, setUserData] = useState([]);
  const [projectData,setProjectData] = useState([]);
  const updateUser = (e) => {
    if(e.target.id == 'first-name') {
      userData.firstName = e.target.value;
    } else  if(e.target.id == 'last-name') {
      userData.lastName = e.target.value;
    } else  if(e.target.id == 'description') {
      userData.description = e.target.value;
    }
  }
  const updateUserData = () => {
    const options = {
      method: 'PATCH',
      url: `http://localhost:3001/api/users/${sessionStorage.getItem('userId')}`,
      headers: {'Content-Type': 'application/json',
      'authorization': sessionStorage.getItem('jwtToken')
      },
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        description: userData.description
      }
    };

    axios.request(options).then(function (response) {
      alert("succesfully updated user")
      window.location.href = '/Profile'
      console.log(response.data);
    }).catch(function (error) {
      alert("Something went wrong")
      console.error(error);
    });
  }
  useEffect(() => {
    if(!userData.length) {
      getUserData(sessionStorage.getItem('userId')).then(data => {
        setUserData(data || []);
      })
    }
    if(!projectData.length) {
      getproject_data().then((data) => {
        setProjectData(data || []);
      })
    }

  },[])
  return (
    <div className="bg-purple">
      <Head>
        <link rel="icon" href="/home" />
      </Head>
      <header className="h-20 flex items-center bg-gray-100 fixed top-0 left-0 w-full z-50">
        <div className="h-25 max-w-2.5rem ml-6">
          <Image src={icon} alt="Icon" height={50} />
        </div>
        <h1 className="text font-san sarif font-bold  ml-4">DEV-CONNECT</h1>
        <nav className="flex flex-grow justify-end">
          <div className="flex justify-center">
            <Link className="text-sm font-medium mr-5" href="/">
              HOME
            </Link>
            <Link className="text-sm font-medium mr-5" href="services">
              PROJECTS
            </Link>
            <Link className="text-sm font-medium mr-10" href="DEV">
              DEVELOPERS
            </Link>
          </div>
        </nav>
        <div className="flex flex-row gap-2 mr-7">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder-user.jpg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16 mt-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-2xl font-bold">{userData?.firstName + " " + userData.lastName}</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      size="icon"
                      variant="ghost"
                    >
                      <PencilIcon className="h-5 w-5" />
                      <span className="sr-only">Edit profile</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                          First Name
                        </Label>
                        <Input
                          className="col-span-3"
                          id="first-name"
                          onChange={updateUser}
                          defaultValue={userData?.firstName}
                        />
                        <Label className="text-right">
                          Last Name
                        </Label>
                        <Input
                          className="col-span-3"
                          id="last-name"
                          onChange={updateUser}
                          defaultValue={userData?.lastName}
                        />
                      </div>
                      {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                          Username
                        </Label>
                        <Input
                          className="col-span-3"
                          id="username"
                          value="@johndoe"
                        />
                      </div> */}
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                          Description
                        </Label>
                        <Textarea
                          className="col-span-3 min-h-[100px]"
                          id="description"
                          onChange={updateUser}
                          defaultValue={userData?.description}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                          Location
                        </Label>
                        <Input
                          className="col-span-3"
                          id="location"
                          readOnly={true}
                          value="India"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={updateUserData}>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {userData?.email}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {userData?.occupation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                India
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">About</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {userData?.description}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Projects</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectData?.map?.((project, index) => (
                  <Card
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md relative"
                  >
                    <Skeleton className="rounded-lg">
                      <CardHeader className="flex flex-row items-center gap-1 justify-between gap-4">
                        <Avatar className="w-8 h-8">
                          <AvatarImage
                            alt="Avatar"
                            src="/placeholder-user.jpg"
                          />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.occupation}</CardDescription>
                        </div>
                        <div className="flex flex-row gap-6">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="icon" variant="ghost">
                                <MoreHorizontalIcon className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="absolute right-0 top-full mt-2"
                            >
                              <Link
                                href={{
                                  pathname: "services/view_project",
                                  query: { id: project._id },
                                }}
                              >
                                <DropdownMenuItem>
                                  View Project
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Join Project
                                </DropdownMenuItem>
                              </Link>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </CardHeader>
                      <CardContent className="grid gap-2">
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{project.updatedAt}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex items-center gap-2">
                          {project?.categoryIds?.map?.((techs, index) => (
                            <Badge key={index} variant="secondary">
                              {techs?.categoryName}
                            </Badge>
                          ))}
                        </div>
                      </CardFooter>
                    </Skeleton>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Requests</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Jane Doe</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Full-stack Developer
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button size="sm">Accept</Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Block</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">John Smith</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Mobile Developer
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Swift</Badge>
                      <Badge variant="secondary">Kotlin</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button size="sm">Accept</Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Block</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Sarah Johnson</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Data Scientist
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Pandas</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-2">
                      <Button size="sm">Accept</Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="ml-auto" size="icon" variant="ghost">
                          <MoreHorizontalIcon className="h-5 w-5" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Block</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}