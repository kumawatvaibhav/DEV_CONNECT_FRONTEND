/**
 * v0 by Vercel.
 * @see https://v0.dev/t/audaeO86uDc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardDescription, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-purple">
      <header className="flex items-center h-50%">
        <img src="favicon.ico" alt="not" className="h-10 max-w-2.5rem" />
        <h1 className="text font-bold  ml-4">DEV-CONNECT</h1>
        <nav className="flex flex-grow justify-end">
          <div  className="flex justify-center">
          <Link className="text-sm font-medium mr-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium mr-4 " href="#about">
            About
          </Link>
          <Link className="text-sm font-medium mr-4" href="#contact">
            Contact
          </Link>
          </div>
        </nav>

        <Button className="bg-black text-white mr-5">LET'S TALK</Button>
      </header>
      <main>
        <section className="bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Connecting Developers Worldwide
            </h2>
            <p className="mb-6">
              DEV-CONNECT is a powerful platform designed to bring developers
              together to collaborate and share ideas. Whether you're a seasoned
              professional or just getting started, our platform is the perfect
              place to connect with like-minded individuals. With our robust
              project listing and collaboration request system, you can take
              your development projects to the next level with ease.
            </p>

            <Button className="bg-blue-600 text-white">LEARN MORE</Button>
          </div>
        </section>
        <section className="p-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Services we provide</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Project Listing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A platform that allows developers to showcase their projects
                    to like-minded individuals and potential collaborators.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Collaboration Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A request system that allows developers to connect with
                    other developers, share ideas, and work on projects
                    together.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Mobile App Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our team of experienced mobile app developers can bring your
                    ideas to life and create a sleek mobile application that
                    aligns your aims and achieves your business goals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">
                Revolutionizing Developer Collaboration: DEV-CONNECT Case Study
              </h4>
              <p className="mb-4">
                Discover how DEV-CONNECT's innovative approach to developer
                collaboration transformed the landscape of technical project
                development and execution.
              </p>
              <div className="flex space-x-2">
                <Button className="bg-blue-600 text-white">
                  READ CASE STUDY
                </Button>
                <ShareIcon className="text-gray-600" />
                <BookmarkIcon className="text-gray-600" />
              </div>
            </div>
            <img
              alt="DEV-CONNECT Case Study"
              className="w-full h-auto"
              height="240"
              src="/placeholder.svg"
              style={{
                aspectRatio: "480/240",
                objectFit: "cover",
              }}
              width="480"
            />
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 p-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2023 DEV-CONNECT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
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
  )
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
  )
}
