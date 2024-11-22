import { Link } from 'react-router-dom';
const LatestNews = () => {
  const posts = [
    { 
      title: 'Be A Volunteer Today', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0411.JPG'// Path to your image
    },
    { 
      title: 'You May Save The Life of A Child', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0411.JPG' // Path to your image
    },
    { 
      title: 'Children That Needs Care', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0408.JPG' // Path to your image
    },
  ];
  return (
    <div className="bg-slate-950">
        <div className="justify-left flex text-4xl text-white p-7 font-bold text-left"><h1>Latest News</h1></div>

        <div className="flex flex-col p-7 gap-20">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className=" shadow-lg rounded-lg text-white overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5 bg-white  text-black">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <b><p className="text-gray-500">{post.date}</p></b>
              <p className="mt-2 text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
    <Link to="/more" className="text-blue-500 hover:underline mt-4 inline-block">
      Read More
    </Link>

            </div>
          </div>
        ))}
      </div> 
      </div>

    </div>
  )
}

export default LatestNews