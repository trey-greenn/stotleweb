import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Stotle AI
          </h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</a>
        </nav>
        <Link 
          href="#download"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Download App
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover Books Instantly with <span className="text-blue-600">AI Recognition</span>
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg">
            Stotle AI helps you browse books while shopping in person. Simply snap a photo and get instant details, reviews, and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-center font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="#how-it-works"
              className="border border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-full text-center font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-800">
            {/* Placeholder for app screenshot - replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xl font-medium">Stotle AI App</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">Point your camera at any book cover and get instant information in seconds.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-300">Get personalized book recommendations based on your reading preferences and history.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-700 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reading List</h3>
              <p className="text-gray-600 dark:text-gray-300">Save books to your personalized reading list and track your reading journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-300 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Scan a Book</h3>
              <p className="text-gray-600 dark:text-gray-300">Open the app and point your camera at any book cover.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-300 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Information</h3>
              <p className="text-gray-600 dark:text-gray-300">View ratings, reviews, price comparisons, and similar titles.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-300 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Make Decisions</h3>
              <p className="text-gray-600 dark:text-gray-300">Decide whether to buy now, save for later, or explore similar books.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Stotle AI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-blue-100">Instantly get all the information you need without lengthy searches.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Make Better Choices</h3>
                <p className="text-blue-100">Access reviews and ratings to ensure you're buying books you'll love.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discover New Books</h3>
                <p className="text-blue-100">Get personalized recommendations that match your reading preferences.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Price Comparison</h3>
                <p className="text-blue-100">Find the best deals by comparing prices across different retailers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Book Shopping?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Download Stotle AI today and start discovering books smarter, faster, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.445 21.333c-.347.336-.875.511-1.433.511-.991 0-1.861-.579-2.12-1.498l-6.327-22.094c-.231-.806.11-1.657.859-2.109.75-.452 1.708-.328 2.32.309l16.038 16.71c.558.582.488 1.475-.156 1.973l-9.181 6.198z"/>
                <path d="M6.883 5.037c.457-.344 1.063-.462 1.636-.242.573.22.979.744 1.044 1.353l1.684 15.598c.057.54-.43.966-.964 1.034l-7.848 1.001c-.906.115-1.675-.625-1.542-1.521l3.729-14.143c.126-.487.446-.889.886-1.124l1.375-.956z"/>
              </svg>
              App Store
            </a>
            <a href="#" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814 13.792 12 3.609 22.186c-.28.28-.764.05-.764-.396V2.21c0-.446.484-.677.764-.396zM14.396 12.604 16.5 13.96 5.04 20.188c-.395.223-.892-.07-.892-.525v-1.779l10.248-5.28zm0-1.208L5.04 6.116v-1.78c0-.454.497-.747.892-.524L16.5 10.04l-2.104 1.356zM17.375 10.722l2.098 1.287c.605.373.605 1.282 0 1.654L17.375 14.95 15.124 13.5l2.25-1.453z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Stotle AI</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Book discovery made simple</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Links</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
                  <li><a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a></li>
                  <li><a href="#benefits" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Benefits</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:hello@stotle.ai" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">hello@stotle.ai</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Stotle AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
