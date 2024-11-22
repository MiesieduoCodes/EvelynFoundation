import { Link } from 'react-router-dom';

const LatestNews = () => {
  const posts = [
    { 
      title: 'Become A Lifeline: Volunteer Today', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0411.JPG' // Path to your image
    },
    { 
      title: 'How Your Donation Can Save A Child’s Life', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0411.JPG' // Path to your image
    },
    { 
      title: 'Children in Need of Urgent Care', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0408.JPG' // Path to your image
    },
  ];

  return (
    <div className="bg-slate-950 py-12">
      {/* Title Section */}
      <div className="text-center text-4xl text-white font-extrabold mb-10">
        <h1>Latest News & Updates on Our Charitable Causes</h1>
      </div>

      {/* Posts Grid */}
      <div className="flex flex-col p-7 gap-20">
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-3 text-gray-700">
                  Every contribution matters. Learn how you can make a difference in the lives of children who need urgent care and support.
                </p>
                <Link to="/more" className="text-blue-600 hover:underline mt-4 inline-block font-semibold">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default LatestNews;
