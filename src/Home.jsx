
export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center container mx-auto px-4 py-12 md:py-24">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Create Your Resume in Minutes Using AI
          </h1>
          <p className="text-lg text-gray-600">
            CoHire AI makes it easy for you to create a professional resume in a
            few simple steps. Let AI craft the perfect resume based on your
            skills and experiences.
          </p>
          <a
            href="/create-resume"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 block w-32 text-center"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/resume-hero.png" // replace with your own image path
            alt="Resume Creation"
            className="w-full max-w-sm"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <div className="w-64 p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold">AI-Powered</h3>
              <p className="text-gray-600">
                Our AI tailors your resume to fit the job descriptions and
                highlight your strengths.
              </p>
            </div>
            <div className="w-64 p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Customizable Templates</h3>
              <p className="text-gray-600">
                Choose from a variety of professional templates designed to make
                your resume stand out.
              </p>
            </div>
            <div className="w-64 p-4 border rounded-lg shadow-md m-5">
              <h3 className="text-xl font-bold">Fast & Easy</h3>
              <p className="text-gray-600">
                Generate a resume in minutes and export it in PDF or DOC
                formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 mb-7">
        <div className="container mx-auto text-center flex flex-col justify-center p-5">
          <h2 className="text-3xl font-bold">Start Building Your Resume Now</h2>
          <a
            href="/create-resume"
            className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-md w-36 m-auto shadow-md hover:bg-gray-200"
          >
            Create My Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 CoHire AI. All rights reserved.</p>
          <p>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
