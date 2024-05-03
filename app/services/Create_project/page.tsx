"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Component() {

  const [emailId,setEmailId] = useState(sessionStorage.getItem('emailId'));
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  
  useEffect(() => {
    if(!emailId)
      setEmailId(sessionStorage.getItem('emailId'))
  },[emailId])
  
  const setValue = (e) => {
    if(e.target.id === "project-name") {
      setProjectName(e.target.value)
    } else if(e.target.id === "project-description") {
      setProjectDescription(e.target.value)
    }
  }



  const createProject = () => {
    const options = {
      method: 'POST',
      url: 'http://localhost:3001/api/project',
      headers: {'Content-Type': 'application/json',
      'authorization': sessionStorage.getItem('jwtToken')
      },
      data: {
        title: projectName,
        description: projectDescription
      }
    };

    axios.request(options).then(function (response) {
      alert("succesfully added project")
      console.log(response.data);
    }).catch(function (error) {
      alert("Something went wrong")
      console.error(error);
    });
  }
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col bg-gray-100 dark:bg-gray-950">
        <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800 md:px-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold"
            href="#"
          >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link className="text-sm font-medium hover:underline" href="#">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Join
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Login
            </Link>
          </nav>
        </header>
        <main className="flex-1 px-4 py-8 md:px-6 md:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-3xl font-bold md:text-4xl">
                Explore our Featured Projects
              </h1>
              <div className="flex items-center gap-4">
                <Input
                  className="max-w-xs"
                  placeholder="Search projects..."
                  type="search"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="outline">
                      <FilterIcon className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      Open projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Closed projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Frontend projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Backend projects
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Mobile projects
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="primary">
                  Add New
                </Button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">Project A</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        by Jared Palmer
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Open</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    A collaborative project to build a new website for our
                    company. We're looking for frontend developers to join the
                    team.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>3 members</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">Project B</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        by John Doe
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Open</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We're building a new mobile app for our customers. We need
                    experienced React Native developers to join the team.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>5 members</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">Project C</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        by Sarah Anderson
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Closed</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We're building a new e-commerce platform for our business.
                    We're looking for full-stack developers to join the team.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>7 members</span>
                    </div>
                    <Button disabled size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">Project D</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        by Michael Johnson
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Open</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We're building a new internal tool for our sales team. We're
                    looking for experienced developers to join the team.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>2 members</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">Project E</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        by Emily Wilson
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Open</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We're building a new marketing website for our company.
                    We're looking for frontend developers to join the team.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>4 members</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>TL</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">Project F</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        by Tom Lee
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">Open</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We're building a new mobile app for our customers. We need
                    experienced React Native developers to join the team.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <UsersIcon className="h-4 w-4" />
                      <span>6 members</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <footer className="flex flex-col items-center justify-between border-t border-gray-200 px-4 py-6 dark:border-gray-800 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <nav className="mt-4 flex items-center gap-4 sm:mt-0">
            <Link className="text-sm hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Privacy Policy
            </Link>
          </nav>
        </footer>
      </div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="mx-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Create a New Project</h2>
            <Link href="./">
              <button className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                <XIcon className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </Link>
          </div>
          <form className="mt-6 grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" required type="text" onChange={setValue}/>
              </div>
              <div>
                <Label htmlFor="project-owner" >Project Owner</Label>
                <Input id="project-owner" readOnly={true} value={emailId || ""}/>
              </div>
            </div>
            <div>
              <Label htmlFor="project-description">Project Description</Label>
              <Textarea id="project-description" required onChange={setValue}/>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="project-type">Project Type</Label>
                <Select id="project-type" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="AI/ML">AI/ML</SelectItem>
                    <SelectItem value="fullstack">Full-stack</SelectItem>
                    <SelectItem value="Andriod">Andriod</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button type="submit" onClick={createProject}>Create Project</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
