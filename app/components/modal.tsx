

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; // Función que no devuelve nada
  children: React.ReactNode; // Tipo genérico para cualquier cosa que pueda ser renderizada en React
}
import { IoCloseCircle } from "react-icons/io5";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div className="fixed inset-0 transition-opacity " aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className={`inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[35%] px-4 ${isOpen? 'block' : 'hidden'}`}>
          <div className="bg-white  flex flex-col items-center justify-center ">
            {children}
            <div className="flex justify-end text-4xl w-full mt-2">
                <IoCloseCircle className="text-gray-400 hover:text-gray-500" onClick={onClose}/>
            </div>
            <h3 className="text-1xl leading-6 font-medium text-blue-400 mb-2">50% Complete</h3>
            <div className="flex w-[70%] mb-12 rounded-full bg-gray-500">
              <div className="bg-blue-400 w-full h-2 flex-grow rounded-full"></div>
              <div className="bg-gray-500 w-full h-2 flex-grow rounded-full"></div>
            </div>
            <div className="mb-12 px-10">
              <p className="text-md text-gray-500 text-center">ALMOST THERE COMPLETE THE FORM BELOW TO GET INSTANT ACCESS.</p>
            </div>
            <div className="px-6">
              <p className="text-2xl text-gray-500 text-center">Enter Your Email Address to Access the First Lesson of the Course:</p>
            </div>
          </div>
          <div className="px-12">
              <p className="text-1xl">Email</p>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email addres" />  
          </div>
          <div className="py-4 px-12 flex items-center justify-center ">
              <button type="button" className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-6 bg-red-600 text-2xl font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" >
                Sing Up
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
