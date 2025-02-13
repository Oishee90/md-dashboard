;
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock books data (this can be replaced with actual data from an API or parent component)
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      image:"https://res.cloudinary.com/dhlgk023u/image/upload/v1739419818/bg-9c3b2201-5f26-40b9-9890-4db7a56bde87_pqbwbn.png",
     copis:"1",
      publishedDate: "1925",
      description: "A novel about the American dream and its disillusionment."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      image:"https://res.cloudinary.com/dhlgk023u/image/upload/v1739246667/Group_1000004213_txfpvv.png",
      copis:"2",
      publishedDate: "1960",
      description: "A story about racial injustice in the American South."
    },
    // Add more books as needed
  ];

  // Find the book based on the URL parameter (id)
  const book = books.find((b) => String(b.id) === String(id)) || {};

  return (
    <div>
    <div className="flex items-center gap-4 mb-4">
    <NavLink to="/order-details"><div className="text-white bg-[#8CAB91] rounded-xl px-6 py-2"><MdArrowBack className="text-xl" /></div></NavLink> 
      <h1 className="text-2xl font-bold ">View Book</h1>
      </div>
    <div className="flex items-start justify-around  h-screen p-6">
      {/* Left Side - Book Preview */}
      <div className=" w-2/3 h-screen">
        {/* <h2 className="text-lg font-semibold text-gray-800">Cover</h2>
        <h1 className="text-2xl font-serif mt-40 text-gray-900">{book.title || "Book not found"}</h1> */}
        <img src={book.image} alt="" className=" w-full h-full object-cover" />
      
      </div>

      {/* Right Side - Book Details Panel */}
      <div className="w-1/3 h-screen bg-white p-8 shadow-lg rounded-lg flex flex-col justify-between">
        <div className="pt-[66px]">
          <h3 className=" text-[#364636] font-semibold text-2xl">Order information</h3>
          <p className="text-[#364636] text-lg font-semibold flex justify-between items-center mt-6 mb-4">Number of copies:<span className="font-semibold text-[#707070]">{book. copis || "Unknown"}</span></p>
          <div className="mt-2  flex flex-col gap-1">
          <div className="mt-6 flex justify-center w-full ">
  <div className="w-full ">
    <button className="bg-[#8CAB91] cursor-pointer w-full text-center text-white px-14 py-3 rounded-full text-lg font-semibold hover:bg-[#6C8B74] transition">
    Confirm order
    </button>
  </div>
</div>
<div className="mt-4 flex justify-center w-full cursor-pointer">
  <div className="w-full cursor-pointerss">
    <button className="border cursor-pointer border-[#8CAB91] w-full text-center text-[#8CAB91] px-9 py-3 rounded-full text-lg font-semibold  transition">
    cancel Order
    </button>
  </div>
</div>
                  </div>
        </div>
        {/* Optional buttons like "READ BOOK" can be placed here */}
      </div> 

   
    </div>
    </div>
  );
}

export default BookDetails;
