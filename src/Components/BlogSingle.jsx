import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Post = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API (you can replace this with actual API call later)
    const fetchPost = async () => {
      const mockPosts = [
        { 
          id: 1,
          title: 'Donate Today, Save A Child’s Life', 
          date: 'July 26, 2018',
          image: 'src/Images/DSC_0370.JPG',
          content: 'Full content of the post goes here.'
        },
        { 
          id: 2,
          title: 'Your Donation Can Make A Difference', 
          date: 'July 26, 2018',
          image: 'src/Images/DSC_0375.JPG',
          content: 'Full content of the post goes here.'
        },
        { 
          id: 3,
          title: 'Help Children In Need: Donate Now', 
          date: 'July 26, 2018',
          image: 'src/Images/DSC_0401.JPG',
          content: 'Full content of the post goes here.'
        },
      ];

      const postData = mockPosts.find(post => post.id === parseInt(id));
      setPost(postData);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 md:px-10">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-500 mb-4">{post.date}</p>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-6" />
        <div className="text-gray-700">{post.content}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
