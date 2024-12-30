import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import featuredImg from "../assets/images/Blog2.jpg"; // Replace with your featured image path
import blogImg1 from "../assets/images/Blog1.jpeg"; // Replace with blog image paths
import blogImg2 from "../assets/images/Blog2.jpg"; // Replace with blog image paths

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(1); // State to handle active blog
  const [showFullContent, setShowFullContent] = useState(false); // State to toggle full content

  const blogs = [
    {
      id: 1,
      title: "How the Johnny Depp and Amber Heard Divorce Highlights the Complexities of High Net Worth Divorces",
      description:
        "The highly publicized divorce The highly publicized divorce between Johnny Depp and Amber Heard provides a striking example of the complexities that come with high net worth (HNW) divorces. With both parties amassing significant wealth from their respective acting careers, the legal proceedings involved more than just emotional struggles—it became a battle over substantial assets, including properties, luxury goods, and intellectual property rights. This case serves as a reminder of the unique challenges HNW individuals face when navigating the legal and financial intricacies of asset division. In the Depp-Heard divorce, one of the primary issues was the valuation and division of high-value items such as properties, vehicles, and luxury collectibles. When large estates and significant assets are on the line, as in this case, both parties must ensure full transparency to avoid hidden debts or undervalued assets. For HNW individuals, using warranty documents can help safeguard key financial interests. These agreements ensure that third-party liabilities are properly accounted for and that no hidden financial obligations affect the final settlement. Warranty documents can also act as protection against asset manipulation during the divorce process. They ensure that all debts are disclosed and that any loans or liabilities connected to valuable assets are transparent. Without these legal safeguards, HNW individuals like Depp or Heard risk losing significant wealth due to unexpected financial claims or asset devaluation during contentious proceedings. The Depp-Heard case also highlights the need for comprehensive legal and financial strategies to protect against undervaluation or fraudulent asset disclosures. By implementing tools such as warranties, individuals involved in high-stakes separations can better protect their wealth and secure a fair and transparent division of assets. The Johnny Depp and Amber Heard divorce serves as a cautionary tale, showcasing the importance of financial diligence and legal safeguards in preserving wealth during a complex, high-net-worth separation.between Johnny Depp and Amber Heard provides a striking example of the complexities...",
      image: featuredImg,
      date: "Dec 26, 2024",
    },
    {
      id: 2,
      title: "The Separation of Bill Gates and Melinda French Gates: Insights and Lessons",
      description:
        "On May 2, 2021, the world was taken by surprise when Bill Gates, Microsoft co-founder and billionaire philanthropist, and his wife Melinda French Gates announced their separation after 27 years of marriage. The ex-couple, who had been one of the most influential pairs in philanthropy, issued a statement confirming their commitment to continue running their foundation, the Gates Foundation, which boasts a $40 billion endowment. Despite their split, the Gates' stated they would remain partners in their charitable efforts. One of the most remarkable aspects of their divorce was the lack of a prenuptial agreement. However, the court documents revealed that they had a private separation agreement, which likely helped avoid a public courtroom battle over their multi-billion-dollar estate. Bill Gates, whose net worth at the time exceeded $130.5 billion, and Melinda shared ownership of multiple properties worth millions of dollars, which were presumably addressed in this private agreement. Despite the complexity of their wealth, the couple's focus on amicably continuing their philanthropic work garnered respect and interest from the public. As parents to three children, Bill and Melinda also sought to maintain stability for their family throughout the separation. The Gates divorce, while surprising, demonstrated how even high-profile separations can be managed with discretion, particularly when substantial wealth and public interests are involved.",
      image: blogImg1,
      date: "May 2, 2021",
    },
  ];

  const handleSeeMore = (id) => {
    setActiveBlog(id);
    setShowFullContent(false);
  };

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  return (
    <section className="bg-[#FDF9F3] min-h-screen w-full flex items-center justify-center px-4 sm:px-8">
  <motion.div
    className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Left Section */}
    <motion.div
      className="w-full lg:w-[65%] relative font-SF_Bold"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        {blogs
          .filter((blog) => blog.id === activeBlog)
          .map((blog) => (
            <motion.div
              key={blog.id}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={blog.image}
                alt={`Blog ${blog.id}`}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <motion.div
                className="absolute top-4 left-4 bg-white text-black text-sm font-SF_Medium px-4 py-1 rounded-md shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {blog.date}
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-8 font-SF_Regular"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-SF_Bold bg-white bg-opacity-80 px-2 py-1 rounded text-[#2D2D2D] relative">
                  <span className="absolute top-0 left-0 w-4 h-4 bg-[#FFAA29] rounded-br-full -translate-x-1/2 -translate-y-1/2"></span>
                  {blog.title}
                </h2>
                {!showFullContent ? (
                  <button
                    onClick={handleReadMore}
                    className="mt-4 px-4 py-2 bg-[#FFAA29] text-white font-SF_Medium rounded-lg shadow-md hover:bg-[#FFD07E] transition"
                  >
                    Read More...
                  </button>
                ) : (
                  <>
                    <motion.div
                      className="bg-white bg-opacity-80 p-4 rounded-lg mt-4 overflow-y-auto max-h-[200px] shadow-lg text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {blog.description}
                    </motion.div>
                    <button
                      onClick={() => setShowFullContent(false)}
                      className="mt-4 px-4 py-2 bg-[#FFAA29] text-white font-SF_Medium rounded-lg shadow-md hover:bg-[#FFD07E] transition"
                    >
                      Collapse
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>

    {/* Right Section */}
    <motion.div
      className="w-full lg:w-[40%] flex flex-col gap-8 font-SF_Regular"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {blogs
        .filter((blog) => blog.id !== activeBlog)
        .map((blog) => (
          <motion.div
            key={blog.id}
            className="relative bg-[#FFE5CC] p-4 rounded-xl shadow-lg flex items-center gap-4 cursor-pointer"
            onClick={() => handleSeeMore(blog.id)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={blog.image}
              alt={`Blog ${blog.id}`}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg font-SF_Bold text-[#2D2D2D] relative">
                <span className="absolute top-0 left-0 w-3 h-3 bg-[#FFAA29] rounded-br-full -translate-x-1/2 -translate-y-1/2"></span>
                {blog.title}
              </h3>
              <button className="mt-2 px-3 py-1 bg-[#FFFAF4] text-[#2D2D2D] text-sm font-SF_Medium rounded-lg shadow-md hover:bg-[#FFAA29] transition">
                See More...
              </button>
            </div>
          </motion.div>
        ))}

      {/* See More Blogs Card */}
      <motion.div
        className="relative bg-[#FFE5CC] p-4 rounded-xl shadow-lg flex items-center gap-4 font-SF_Medium"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={blogImg2}
          alt="See More Blogs"
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <button className="mt-2 px-3 py-1 bg-[#FFFAF4] text-[#2D2D2D] text-sm font-SF_Medium rounded-lg shadow-md hover:bg-[#FFAA29] transition">
            See More Blogs...
          </button>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>

  );
};

export default Blogs;
