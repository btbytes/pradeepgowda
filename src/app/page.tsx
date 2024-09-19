import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white py-8 px-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Pradeep Gowda</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-grow py-12 px-10">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="flex">
            <div className="w-1/3 mr-8">
              <Image
                src="https://picsum.photos/id/237/200/300"
                alt="Your Name"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div className="w-2/3">
              <p className="text-gray-600">
                Your bio here. Talk about your skills, experience, and
                interests.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Project Title
              </h3>
              <p className="text-gray-600 mb-4">Brief project description.</p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600">
            You can reach me at{" "}
            <a
              href="mailto:pg@pradeepgowda.com"
              className="text-blue-500 hover:underline"
            >
              pg@pradeepgowda.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="bg-white py-4 px-10 text-center shadow-inner">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Pradeep Gowda
        </p>
      </footer>
    </div>
  );
}
