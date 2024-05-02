"use client";

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
import { useState } from "react"

export default function Component() {
  const [techStacks, setTechStacks] = useState([]);

  const handleTechChange = (event) => {
    // Split the input value by commas and trim any extra spaces
    const stacks = event.target.value.split(",").map((stack) => stack.trim());
    setTechStacks(stacks);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 backdrop-blur-sm">
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
                <Input id="project-name" required type="text" />
              </div>
              <div>
                <Label htmlFor="Tech">Tech</Label>
                <Input
                  id="Tech"
                  required
                  type="text"
                  onChange={handleTechChange}
                  value={techStacks.join(",")} // Join the array to display in the input field
                />
              </div>
            </div>
            <div>
              <Label htmlFor="project-description">Project Description</Label>
              <Textarea id="project-description" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Create Project</Button>
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

