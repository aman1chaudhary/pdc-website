import React, { useState } from "react";

const BlogList = ({ blogs }) => {
  // State variables for search query and filtered blogs
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Function to handle search
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter blogs based on search query
    const filtered = blogs.filter(blog => blog.Tags.includes(query));
    setFilteredBlogs(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search tags..."
      />
      {filteredBlogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.BlogTitle}</h3>
          {/* Render other blog details */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
