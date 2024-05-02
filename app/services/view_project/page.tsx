"use client";

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { getproj_data_id } from "@/lib/data_project";

//Card
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@nextui-org/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, FacebookIcon, MoreHorizontalIcon, MountainIcon, TagIcon, TwitterIcon, UsersIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import icon from "../../favicon.ico";

export default function ProjectDetailPage() {
  //const searchParams = new URLSearchParams("http://localhost:3000/services/view_project?id=1")
  //const router = useRouter();
  const searchParams = useSearchParams();
  const proj_id  = searchParams.get('id');
  const [project, setProject] = useState([{}]);

  useEffect(() => {
    if (proj_id) {
      // Fetch project data based on ID
      const fetchData = () => {
        const data = getproj_data_id(+proj_id)?? [{}];
        setProject([data]);
      };
      fetchData();
    }
  }, [proj_id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  // Render project details
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-100 dark:bg-gray-950">
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="/"
        >
          <Image src={icon} alt="logo" width={30} height={30} />
          <span className="text font-san sarif font-bold  ml-4">
            DEV-CONNECT
          </span>
        </Link>
        <nav className="flex flex-grow justify-end">
          <div className="flex justify-center">
            <Link className="text-sm font-medium mr-5" href="/">
              HOME
            </Link>
            <Link className="text-sm font-medium mr-5" href="/services">
              PROJECTS
            </Link>
            <Link className="text-sm font-medium mr-10" href="/DEV">
              DEVELOPERS
            </Link>
          </div>
        </nav>
        <div className="flex flex-row gap-2 mr-7">
          <Link href="/Profile">
            <Button
              className="rounded-full ml-auto"
              size="icon"
              variant="ghost"
            >
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
              <span className="sr-only">user menu</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">
            Project Details
          </h1>
          <div className="grid gap-8">
            {project.map((pjt, index) => (
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        alt="@username"
                        src="/placeholder-user.jpg"
                      />
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 text-sm">
                      <div className="font-medium">{pjt.title}</div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {pjt.d_name}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Project Description
                    </h2>
                    <p>{pjt.description}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Project Details</h2>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <UsersIcon className="h-5 w-5" />
                        <span>3 members</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        <span>{pjt.time}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ClockIcon className="h-5 w-5" />
                        <span>Estimated completion: 3 months</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <TagIcon className="h-5 w-5" />
                        {pjt.tech.map((techs, index) => (
                          <Badge key={index} variant="secondary">
                            {techs}
                          </Badge>
                        ))}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Join the Team</h2>
                    <p>
                      If you're interested in joining the team, please click the
                      "Join" button below.
                    </p>
                    <Button className="mt-2" size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))};
          </div>
        </div>
      </main>
      <footer className="bg-black text-white p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">DEV-CONNECT</h2>
                <div className="flex space-x-4">
                  <FacebookIcon className="text-white" />
                  <TwitterIcon className="text-white" />
                  <YoutubeIcon className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Services</h3>
                <ul className="space-y-2">
                  <li>Developer Search</li>
                  <li>Collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">About</h3>
                <ul className="space-y-2">
                  <li>Our story</li>
                  <li>Team Members</li>
                </ul>
              </div>
              <div>
                <p className="mb-4">22BT04059@gsfcuniversity.ac.in</p>
                <p className="mb-4">Gsfc university</p>
                <p className="mb-4">+91 7016563416</p>
              </div>
            </div>
          </footer>
    </div>
  );
}
