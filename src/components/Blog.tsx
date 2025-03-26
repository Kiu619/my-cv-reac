import blog6 from '../assets/image/blog-6.c9c9e820.jpg'
import blog2 from '../assets/image/blog-2.f9dc025a.jpg'
import blog4 from '../assets/image/blog-4.dfc7c2c3.jpg'
import blog5 from '../assets/image/blog-5.03fcecf8.jpg'
import blog3 from '../assets/image/blog-3.54d77f14.jpg'
import { FC } from 'react'

interface BlogPost {
  id: number
  image: string
  category: string
  title: string
  description: string
  date: string
  alt: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: blog6,
    category: "General",
    title: "See my current workspace",
    description: "The first thing to remember about success is that it is a process.",
    date: "8 Nov 25",
    alt: "Current Workspace"
  },
  {
    id: 2,
    image: blog2,
    category: "Web Design",
    title: "How to become a web designer?",
    description: "He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering.",
    date: "5 Nov 25",
    alt: "Web Design"
  },
  {
    id: 3,
    image: blog4,
    category: "User Interface",
    title: "Why is it better to work nights?",
    description: "Legs, and only stopped when he began to feel a mild, dull pain there that he had never felt.",
    date: "2 Nov 25",
    alt: "User Interface"
  },
  {
    id: 4,
    image: blog5,
    category: "Photography",
    title: "Can you work everywhere?",
    description: "Drops of rain could be heard hitting the pane, which made him feel quite sad..",
    date: "1 Nov 25",
    alt: "Photography"
  },
  {
    id: 5,
    image: blog6,
    category: "Other",
    title: "How to connect your imac or macBook",
    description: "However hard he threw himself onto his right, he always rolled back to where he was.",
    date: "29 Oct 25",
    alt: "Other"
  },
  {
    id: 6,
    image: blog3,
    category: "Workspace",
    title: "I'm starting a new project",
    description: "The first thing to remember about success is that it is a process...",
    date: "25 Oct 25",
    alt: "Workspace"
  }
]

const BlogCard = ({ post }: { post: BlogPost }) => (
  <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300">
    <a href="#" className="">
      <div className="relative w-full">
        <img 
          src={post.image}
          alt={post.alt} 
          className="w-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-[11px] text-gray-500! mb-2 inline-block">{post.category}</span>
        <h3 className="text-md mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {post.description}
        </p>
        <span className="text-[11px] text-gray-500!">{post.date}</span>
      </div>
    </a>
  </div>
)

const Blog: FC = () => {
  return (
    <div id="blog" className="visible">
      <div className="p-6 md:p-8">
        <div className="mb-10 section-title">
          <h2>
            Blog Posts
          </h2>
        </div>

        <div className="flex flex-wrap gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors duration-300 cursor-pointer">
            Load More (3)
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
