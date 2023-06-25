'use client'
import Popup from "reactjs-popup";

const NotificationPopup = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-end fixed z-[999] right-10 top-1/3 ">
      <Popup
        trigger={
          <button className="text-sm bg-black  hover:bg-black/50 text-white font-bold py-2 px-2 rounded">
            See next class
          </button>
        }
        position="bottom right"
        closeOnDocumentClick
        arrow={false}
        // modal
      >
        {(close) => (
          <div className="w-64 bg-white rounded shadow-lg p-4 fixed z-[999] right-10 top-1/3 ">
            <h3 className="text-lg font-semibold mb-2">Notification</h3>
            <p className="text-gray-800 mb-4 text-base">
              Next Class Starts 7 of July, 2023
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={close}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default NotificationPopup;