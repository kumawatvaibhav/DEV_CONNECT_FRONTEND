"use client"
const imageStyle = {
    borderRadius: "15%",
    border: "1px solid #fff",
};
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
import {DropdownMenuTrigger , DropdownMenuItem , DropdownMenuContent , DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator} from "@/components/ui/dropdown-menu"
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
    UserIcon,
    FilterIcon,
    LocateIcon,
} from "lucide-react";
import { url } from "inspector";
import { NextFetchEvent } from "next/server";
import axios from "axios";
import React, { useState, useEffect } from "react"
import { getuser_data } from "@/lib/data";
import Link from "next/link";


export default function DEV(){
   const [developerData, setDeveloperData] = useState([]);
   useEffect(() => {
    if(!developerData.length) {
      getuser_data().then(userData => {
        setDeveloperData(userData);
      })
    }
   },[developerData]) 
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
          {
            sessionStorage.getItem('jwtToken') ? 
          <div className="flex flex-row gap-2 mr-7">
            <Link href="Profile">
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
          </div> : <div></div>
          }
        </header>
        <main className="container mx-auto py-8 px-4 md:px-6 mt-20 bg-gray-100">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <form className="flex-1">
                <Input
                  className="bg-white dark:bg-gray-950"
                  placeholder="Search developers by name, tech stack, or location..."
                />
                <Button className="sr-only" type="submit">
                  Submit
                </Button>
              </form>
              <div className="flex gap-2">
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
                    <DropdownMenuCheckboxItem>AI/ML</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Full Stack</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Frontend projects</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Backend projects</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Andriod projects</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2 mt-1.72">
              <h2 className="text-2xl font-bold mt-5">Top Developers</h2>
              <Link
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                View All
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
              {developerData?.map?.((developer, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <UserIcon className="w-8 h-8" />
                    <div className="grid gap-1">
                      <CardTitle>{developer.firstName + " " + developer.lastName}</CardTitle>
                      <CardDescription>{developer.occupation}</CardDescription>
                    </div>
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="ml-auto" size="icon" variant="ghost">
                          <MoreHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Send Request</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <section className="h-20">
                      <div className="text-gray-500 dark:text-gray-400 mb-4">
                        {developer.description}
                      </div>
                    </section>
                    <div className="flex items-center gap-8 text-sm">
                      <div className="flex items-center gap-1">
                        <LocateIcon className="w-4 h-4" />
                        <span className="text-gray-500 dark:text-gray-400">
                          {developer.location || "India"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {developer?.skills?.map?.((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {developer?.projects?.map?.((project, index) => (
                        <Badge key={index} variant="default">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
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
              
                <li>SMM production</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">About</h3>
              <ul className="space-y-2">
                <li>Our mission</li>
                <li>Team Members</li>
               
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
  