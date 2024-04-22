import Link from "next/link";
const imageStyle = {
    borderRadius: "15%",
    border: "1px solid #fff",
};
import {Skeleton} from "@nextui-org/skeleton";
import { useHover } from "react-aria";
import { Button } from "@/components/ui/button";
import {
    CardTitle,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input"
import {AvatarImage , AvatarFallback , Avatar} from "@/components/ui/avatar"
import {DropdownMenuTrigger , DropdownMenuItem , DropdownMenuContent , DropdownMenu} from "@/components/ui/dropdown-menu"
import {Badge} from "@/components/ui/badge"

import Image from "next/image";
import laptop from "../app/laptop-2.jpg";
import Team from "../app/teamwork-7423952.jpg";
import Collab from "../app/collab.png";
import View from "../app/view.png";
import Listing from "../app/Listing.png";
import icon from "../favicon.ico";
import div_font from "next/font/google";
import Head from "next/head";
import {
    BarChartIcon,
    GroupIcon,
    BriefcaseIcon,
    StarIcon,
    Laptop2,
    CalendarIcon,
    MoreHorizontalIcon,
} from "lucide-react";
import { url } from "inspector";

export default function Service() {
    return (
      <div className="bg-purple">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="h-20 flex items-center bg-white fixed top-0 left-0 w-full z-50">
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
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4 md:px-6 mt-20 bg-gray-100">
          <div className="max-w-6xl w-full mx-auto flex items-center gap-4 mb-10">
            <form className="flex-1">
              <Input
                className="bg-white dark:bg-gray-950"
                placeholder="Search projects..."
              />
              <Button className="sr-only" type="submit">
                Submit
              </Button>
            </form>
            <Button>Add New</Button>
          </div>
          <section className="max-w-6xl w-full mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Top Projects</h2>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                View All
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md relative">
                <Skeleton className="rounded-lg">
                  <CardHeader className="flex flex-row items-center gap-1 justify-between gap-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage alt="Avatar" src="./" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <CardTitle>Project 1</CardTitle>
                      <CardDescription>Demo project</CardDescription>
                    </div>
                    <div className="flex flex-row gap-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoreHorizontalIcon className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="absolute right-0 top-full mt-2">
                          <DropdownMenuItem>View Project</DropdownMenuItem>
                          <DropdownMenuItem>Join Project</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      A comprehensive project management tool for teams.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="w-4 h-4" />
                      <span>Updated 2 days ago</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                    </div>
                  </CardFooter>
                </Skeleton>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Ecommerce Platform
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Sarah Myles
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>Join Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    A modern and scalable ecommerce platform for businesses.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Updated 1 week ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">AI Assistant</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        John Doe
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>Join Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    A powerful AI assistant to help you with your daily tasks.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Updated 3 days ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">Hugging Face</Badge>
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Social Media App
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Emily Martinez
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>Join Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    A social media platform for connecting with friends and
                    family.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Updated 2 weeks ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Productivity App
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Ryan Kim
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>Join Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    A comprehensive productivity app to help you stay organized
                    and focused.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Updated 1 month ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">Hive</Badge>
                    <Badge variant="secondary">Bloc</Badge>
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                      <AvatarFallback>LW</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Finance Tracker</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Lisa Wang
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                      <DropdownMenuItem>Join Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    A personal finance tracking app to help you manage your
                    money better.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Updated 2 months ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Expo</Badge>
                    <Badge variant="secondary">Plaid</Badge>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </section>
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
                <li>How it works</li>
                <li>Work Portfolio</li>
                <li>SEO & Backlinks</li>
                <li>SMM production</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">About</h3>
              <ul className="space-y-2">
                <li>Our mission</li>
                <li>Our story</li>
                <li>Team Members</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <p className="mb-4">vaibhavkumawat21318@gmail.com</p>
              <p className="mb-4">Gsfc university</p>
              <p className="mb-4">+91 7016563416</p>
            </div>
          </div>
        </footer>
      </div>
    );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
