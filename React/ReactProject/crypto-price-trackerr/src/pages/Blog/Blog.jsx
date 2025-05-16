import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const blogPosts = [
    {
      id: 1,
      title: "Bitcoin Hits $75,000: What’s Driving the Surge?",
      excerpt:
        "Bitcoin reached an all-time high of $75,000 on May 1, 2025, fueled by institutional adoption and macroeconomic factors. Analysts predict further growth.",
      category: "Market Trends",
      date: "May 1, 2025",
      author: "Jane Doe",
      image:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202411/672afbabbe2d9-among-other-top-crypto-tokens--dogecoin-zoomed-nearly-30-per-cent--while-uniswap-was-up-23-per-cent-061621873-16x9.jpg?size=948:533",
    },
    {
      id: 2,
      title: "Ethereum’s Merge 2.0: A Game-Changer for DeFi",
      excerpt:
        "Ethereum’s upcoming Merge 2.0 upgrade promises to enhance scalability and reduce gas fees, impacting the DeFi ecosystem significantly.",
      category: "DeFi",
      date: "April 28, 2025",
      author: "John Smith",
      image:
        "https://images.ctfassets.net/s9n78lc7gxyk/5RYhQ2NFehUFybU1bmA3wT/cb0a58aefe58944da034843d5c575408/A_futuristic_3D_Ethereum_logo_transforming_into_a_brighter__upgraded_version__with__network_nodes__validators__and_proof-of-.jpg",
    },
    {
      id: 3,
      title: "How to Protect Your Crypto from Phishing Attacks",
      excerpt:
        "With rising cyber threats, learn how to safeguard your crypto assets from phishing attacks using multi-factor authentication and cold wallets.",
      category: "Security",
      date: "April 25, 2025",
      author: "Alice Johnson",
      image:
        "https://img.etimg.com/thumb/msid-103174563,width-300,height-225,imgsize-14626,resizemode-75/phishing-ransomware-beyond-seven-types-of-cyberattacks-you-should-know.jpg",
    },
    {
      id: 4,
      title: "The Rise of Stablecoins in 2025",
      excerpt:
        "Stablecoins like USDC and USDT are gaining traction as a hedge against volatility, with new regulations shaping their future.",
      category: "News",
      date: "April 20, 2025",
      author: "Bob Wilson",
      image:
        "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2025-03/0195bc06-6beb-722a-b4e1-eced4fc44f9b",
    },
    {
      id: 5,
      title: "NFT Market Recovery: What to Expect",
      excerpt:
        "After a downturn, the NFT market shows signs of recovery with innovative projects driving renewed interest.",
      category: "Market Trends",
      date: "April 15, 2025",
      author: "Emma Brown",
      image:
        "https://images.ctfassets.net/s9n78lc7gxyk/5RYhQ2NFehUFybU1bmA3wT/cb0a58aefe58944da034843d5c575408/A_futuristic_3D_Ethereum_logo_transforming_into_a_brighter__upgraded_version__with__network_nodes__validators__and_proof-of-.jpg",
    },
  ];

  const categories = ["Market Trends", "DeFi", "Security", "News"];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fallbackImage =
    "https://via.placeholder.com/600x400?text=Image+Not+Available";

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 py-8 bg-gradient-to-br from-[#0b004e] via-[#1d152f] to-[#002834]">
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Crypto Insights Blog
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-medium max-w-2xl mx-auto">
          Stay informed with the latest news, trends, and expert analysis in the
          cryptocurrency world.
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full px-4 py-2 rounded-lg bg-[#1a1333] border border-gray-600 text-white placeholder-gray-400 outline-none text-sm sm:text-base focus:ring-2 focus:ring-purple-600 transition"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="block bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl overflow-hidden border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      e.target.src = fallbackImage;
                      console.log(
                        `Image failed to load for ${post.title}, using fallback`
                      );
                    }}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-purple-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-500">
                      By {post.author}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-2">
                No blog posts found.
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      currentPage === number
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    } transition`}
                  >
                    {number}
                  </button>
                )
              )}
            </div>
          )}
        </section>

        <aside className="lg:w-1/4">
          <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 sticky top-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/blog/category/${category.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 text-sm transition"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
