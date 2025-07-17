import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Stotle AI
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
          <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
          <Link href="/#benefits" className="hover:text-blue-600 transition-colors">Benefits</Link>
        </nav>
        <Link 
          href="https://apps.apple.com/us/app/stotle/id6747648204"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Download App
        </Link>
      </header>

      {/* About Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Stotle AI</h1>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-xl border-4 border-blue-600">
              <Image src="/discover.png" alt="Stotle AI App" fill className="object-cover" />
            </div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Revolutionizing Book Discovery</h2>
            <p>
              Stotle AI is transforming how readers discover and explore books by leveraging cutting-edge AI image recognition technology. 
              Our mission is to bridge the gap between physical bookstores and digital information, creating a seamless book shopping 
              experience that combines the joy of browsing physical books with the wealth of information available online.
            </p>
            
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Our Story</h2>
            <p>
              Born from a passion for both literature and technology, Stotle AI was created to solve a common problem faced by book lovers: 
              the uncertainty of making purchasing decisions while shopping in physical bookstores. We recognized that while online 
              shopping provides abundant information, it lacks the tactile experience of browsing physical books. Conversely, 
              in-store shopping offers a rich sensory experience but limited access to reviews, ratings, and recommendations.
            </p>
            
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">How Stotle AI Works</h2>
            <p>
              At its core, Stotle AI uses sophisticated computer vision and machine learning algorithms to instantly recognize book 
              covers when you snap a photo. Our technology can identify books across multiple genres, languages, and editions with 
              remarkable accuracy. Once a book is recognized, our platform connects to comprehensive databases to retrieve:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li><strong>Detailed Book Information:</strong> Author details, publication date, genre, and synopsis</li>
              <li><strong>Reader Reviews and Ratings:</strong> Aggregated from trusted sources to help inform your decision</li>
              <li><strong>Price Comparisons:</strong> Find the best deals across multiple retailers</li>
              <li><strong>Personalized Recommendations:</strong> Discover similar books based on your interests and reading history</li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">The Stotle AI Difference</h2>
            <p>
              What sets Stotle AI apart is our commitment to enhancing rather than replacing the traditional bookstore experience. 
              We believe in the irreplaceable value of physical bookstores as cultural spaces and discovery hubs. Our technology 
              is designed to complement this experience, providing digital insights while you enjoy the physical atmosphere of bookshops.
            </p>
            
            <p>
              Our intelligent recommendation engine goes beyond simple genre matching. By analyzing textual themes, writing styles, 
              narrative structures, and reader responses, we can suggest books that truly resonate with your unique reading preferences. 
              This creates a discovery experience that feels both personalized and serendipitous.
            </p>
            
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Features That Empower Readers</h2>
            <ul className="mt-4 space-y-2">
              <li><strong>Instant Recognition:</strong> Simply point your camera at any book cover for immediate information</li>
              <li><strong>Curated Reading Lists:</strong> Save books to personalized lists for future reference</li>
              <li><strong>Reading History:</strong> Track your literary journey and discover patterns in your preferences</li>
              <li><strong>Social Sharing:</strong> Share discoveries with friends and family</li>
              <li><strong>Offline Functionality:</strong> Basic features work even without internet connection</li>
              <li><strong>Privacy Focus:</strong> We respect your data and reading choices with robust privacy controls</li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Our Vision</h2>
            <p>
              At Stotle AI, we envision a future where technology enhances the joy of reading and discovery without diminishing 
              the unique charm of traditional bookstores. We're working toward creating an ecosystem where readers, authors, 
              publishers, and bookstores all benefit from intelligent, thoughtful technology integration.
            </p>
            
            <p>
              As we grow, we continue to refine our algorithms, expand our database, and develop new features that make 
              book discovery more intuitive, enjoyable, and accessible to readers everywhere.
            </p>
            
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">Join Our Community</h2>
            <p>
              Stotle AI is more than an app—it's a community of passionate readers and technology enthusiasts. We invite you 
              to join us on this journey as we revolutionize book discovery together. Download our app today and experience 
              the future of book shopping.
            </p>
            
            <div className="mt-8 flex justify-center">
              <Link 
                href="https://apps.apple.com/us/app/stotle/id6747648204"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-center font-medium transition-colors"
              >
                Download Stotle AI Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-16">
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
                  <li><Link href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Features</Link></li>
                  <li><Link href="/#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">How It Works</Link></li>
                  <li><Link href="/#benefits" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Benefits</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:hello@stotle.ai" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">hello@stotle.ai</a></li>
                  <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Support</Link></li>
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
  )
}

export default AboutPage