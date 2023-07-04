





function AskQ() {
    return (
        <>

            <div className="mt-3 font-bold">
                <h1>Ask A Question</h1>
                <form>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"></textarea>
                    <button className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'>Submit</button>
                </form>
            </div>

        </>
    )
}

export default AskQ;