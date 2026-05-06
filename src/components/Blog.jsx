import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "Are Dental Implants Right for You?",
      date: "April 18, 2035",
      img: "https://images.unsplash.com/photo-1698749778813-ad5f2814e50f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "5 Tips to Maintain a Healthy Smile",
      date: "February 10, 2035",
      img: "https://images.unsplash.com/photo-1734518352247-706431856d33?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "When to Bring Your Child for Their First Dental Visit",
      date: "March 2, 2035",
      img: "https://images.unsplash.com/photo-1686740512939-1eca8395e484?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">From the Dentist's Desk</h2>
        <p className="text-gray-500 text-sm md:text-base text-right max-w-[250px]">
          Your go-to source for trusted dental tips, trends, and wellness advice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-64 w-full rounded-[30px] overflow-hidden mb-6">
              <img 
                src={post.img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={post.title} 
              />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-teal-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;