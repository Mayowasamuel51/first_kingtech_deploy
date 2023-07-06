import Admi_Layout from "../../Admin/Admi_Layout";

function Sendlink() {
    return (
        <div className="container">
        <div className="mt-3 font-bold ">
            <div className="m-5">
                <h1>Cyber Link</h1>
                <form>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
                    <button className='mt-3 border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
                </form>
            </div>
            </div>
            
            <div className="mt-3 font-bold ">
            <div className="m-5">
                <h1>Mentorship Link</h1>
                <form>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
                    <button className='mt-3 border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
                </form>
            </div>
            </div>
            

            <div className="mt-3 font-bold ">
            <div className="m-5">
                <h1>Security  Link</h1>
                <form>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
                    <button className='mt-3 border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
                </form>
            </div>
        </div>

    </div>
    )
}
export default Admi_Layout(Sendlink);