"use client";

import Link from "next/link";
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
} from "@/components/ui/card";
import Image from "next/image";
import laptop from "../app/images/laptop-2.jpg";
import Team from "../app/images/teamwork-7423952.jpg";
import Collab from "../app/images/collab.png";
import View from "../app/images/view.png";
import Listing from "../app/images/Listing.png";
import icon from "./favicon.ico";
import div_font from "next/font/google";
import Head from "next/head";
import {
  BarChartIcon,
  GroupIcon,
  BriefcaseIcon,
  StarIcon,
  Laptop2,
  Anchor,
} from "lucide-react";
import { url } from "inspector";
import React, { useState } from 'react';
import { Client } from "@clerk/nextjs/server";
import Card_click from "@/components/ui/card";


export default function Component() {
  const isLoggedIn = false;
  
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your email submission logic here
    console.log("Email submitted:", email);
    // Clear the email field after submission
    setEmail("");
  };

  return (
    <div className="bg-purple">
      <Head>
        <link rel="icon" href="/home" />
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
        <div id="login">
          {sessionStorage.getItem('jwtToken') ? (
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
          ) : (
            <Link href="Login">
              <Button className="bg-black text-white mr-10">LOGIN</Button>
            </Link>
          )}
        </div>
      </header>
      <main>
        <section className="bg-gray-100 p-8 flex justify-center">
          <div className="max-w-6xl mt-14 ">
            <h1 className="text-5xl font-sans sarif font-bold mt-20 mb-6 text-center text-gray-900">
              Connecting Developers Worldwide
            </h1>
            <p className="mb-10 font sans sarif text-gray-500 leading-relaxed text-center">
              DEV-CONNECT is a powerful platform designed to bring developers
              together to collaborate and share ideas. Whether you're a seasoned
              professional or just getting started, our platform is the perfect
              place to connect with like-minded individuals. With our robust
              project listing and collaboration request system, you can take
              your development projects to the next level with ease.
            </p>
            <div className="flex justify-center mb-9">
              <Image src={laptop} alt="Picture of the author" height={670} />
            </div>
            <div className="flex justify-center">
              <Link href="#Card">
                <Button className="text-white">LEARN MORE</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-2 py-5">
          <div className="grid grid-cols-3 gap-8">
            <Card className="bg-gray-100 p-6 text-center gap-1">
              <BarChartIcon className="text-gray-500 mb-1" />
              <h3 className="text-lg font-semibold mb-2">
                Total Projects Listed
              </h3>
              <p className="text-3xl font-bold mb-1">0</p>
              <p className="text-gray-600">Find the right project for you</p>
            </Card>
            <Card className="bg-gray-100 p-6 text-center">
              <GroupIcon className="text-gray-500 mb-1" />
              <h3 className="text-lg font-semibold mb-2">
                Developers Available
              </h3>
              <p className="text-3xl font-bold mb-1">3</p>
              <p className="text-gray-600">Discover skilled developers</p>
            </Card>
            <Card className="bg-gray-100 p-6 text-center">
              <BriefcaseIcon className="text-gray-500 mb-1" />
              <h3 className="text-lg font-semibold mb-2">Projects Completed</h3>
              <p className="text-3xl font-bold mb-1">0</p>
              <p className="text-gray-600">Create and collaborate</p>
            </Card>
          </div>
        </section>
        <section className="p-8">
          <div id="Card" className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Services we provide</h3>
            <div className="grid grid-cols-3 gap-4">
              <Link href="services">
                <Card className="text-center w-full bg-purple hover:shadow-lg cursor-pointer">
                  <Image
                    className="mx-auto mt-8 text-center"
                    style={imageStyle}
                    src={Listing}
                    alt="Picture of the author"
                  />
                  <CardHeader>
                    <CardTitle>Project Listing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our project listing service allows engineers to list their
                      projects on our website and share them with other
                      engineers globally. It's a great way to gain visibility
                      and attract developers to your project. You can easily
                      manage your project, receive requests, and invite
                      developers to join your team.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="DEV">
                <Card className="text-center w-full bg-purple hover:shadow-lg cursor-pointer">
                  <Image
                    className="mx-auto mt-8 text-center"
                    style={imageStyle}
                    src={View}
                    alt="Picture of the author"
                  />
                  <CardHeader>
                    <CardTitle>Developer Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our developer search service lets you search for
                      developers based on specific skills, location, and
                      experience. You can browse through developer profiles and
                      send a request to join your project or invite them to work
                      with you on other projects. Our developer search service
                      is a to connect
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>

              <Link href="Profile">
                <Card className="text-center w-full bg-purple hover:shadow-lg cursor-pointer">
                  <Image
                    className="mx-auto mt-8 text-center"
                    style={imageStyle}
                    src={Collab}
                    alt="Picture of the author"
                  />
                  <CardHeader>
                    <CardTitle>Collaboration Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our collaboration platform provides a centralized location
                      for team members to work together seamlessly. You can
                      share files, communicate in real-time, and manage tasks in
                      one place. With our platform, you can collaborate with
                      team members worldwide and work together in real-time.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">
                Revolutionizing Developer Collaboration
              </h4>
              <p className="mb-4">
                Discover how DEV-CONNECT's innovative approach to developer
                collaboration transformed the landscape of technical project
                development and execution. Stay updated on new releases and
                features, guides, and case studies.
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-purple-500 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-r focus:outline-none focus:bg-black-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <Image
              alt="DEV-CONNECT Case Study"
              className="w-full h-auto"
              src={Team}
              style={{
                aspectRatio: "500/350",
                objectFit: "cover",
              }}
            />
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
            <Link href="#Card">
              <h3 className="font-semibold text-lg mb-3">Services</h3>
              <ul className="space-y-2">
                <li>Project Search</li>
                <li>Collaboration</li>
                <li>Developer Search</li>
              </ul>
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <ul className="space-y-2">
              <li>Our mission</li>
              <li>Our story</li>
              <li>Team Members</li>
            </ul>
          </div>
          <div>
            <p className="mb-2">22BT04059@gsfcuniversity.ac.in</p>
            <p className="mb-2">Gsfc university</p>
            <p className="mb-2">+91 6355133537</p>
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


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
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


function ViewIcon(props) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
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


function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
