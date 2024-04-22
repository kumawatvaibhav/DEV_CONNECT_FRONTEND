import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Projects
          </Link>
          <Link className="font-bold" href="#">
            Developers
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Requests
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
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
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-2 relative">
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  alt="User Avatar"
                  className="rounded-full"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div className="grid gap-1">
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Full-stack Developer</CardDescription>
                </div>
                <Button className="absolute top-4 right-4" size="sm" variant="outline">
                  Edit
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">johndoe@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Phone</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Location</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">GitHub</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <Link className="underline" href="#">
                        johndoe
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">Skills</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">SQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Experience</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      5+ years of experience in web development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="User Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="text-sm font-medium">Jane Doe</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="User Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="text-sm font-medium">Michael Smith</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Backend Developer</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>My Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Project Thumbnail"
                        className="rounded"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="text-sm font-medium">E-commerce Website</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ongoing</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Project Thumbnail"
                        className="rounded"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="text-sm font-medium">Mobile App Development</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recommended Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Project Thumbnail"
                        className="rounded"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="text-sm font-medium">Data Visualization Dashboard</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Recommended</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Project Thumbnail"
                        className="rounded"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <p className="text-sm font-medium">AI-powered Chatbot Application</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Recommended</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Apply
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function FrameIcon(props) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}

