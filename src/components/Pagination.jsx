import { useContext } from "react";
import { AppContext } from "../context/AppContext";



export default function Pagination(){
    const {page, handlePageChange, totalPages} = useContext(AppContext);
    return (
        <div className="fixed w-full bottom-0 insert-x-0 py-2 border-t-2 border-t-gray-300 bg-white">
            <div className="flex w-11/12 max-w-2xl justify-between gap-x-3 items-center mx-auto py-2">
                <div className="flex gap-x-2">
                    {
                        page > 1 &&
                        <button 
                        className="rounded-md border-2 px-4 py-1"
                        onClick={ () => handlePageChange(page -1)}>
                            Previous
                        </button>
                    }

                    {
                        page < totalPages && 
                        <button
                        className="rounded-md border-2 px-4 py-1"
                        onClick={ () => handlePageChange(page + 1)}>
                            Next
                        </button>
                    }
                </div>
                


                <p className="font-bold text-xl">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}