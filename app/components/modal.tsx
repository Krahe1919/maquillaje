

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; // Función que no devuelve nada
  children: React.ReactNode; // Tipo genérico para cualquier cosa que pueda ser renderizada en React
}
import { IoIosCloseCircle } from "react-icons/io";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div className="fixed inset-0 transition-opacity " aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  ${isOpen? 'block' : 'hidden'}`}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-center justify-center space-y-16">
            {children}
            <div className="flex items-center justify-center text-4xl border border-gray-400 rounded-full h-16 w-16">
                <span className="">x</span>
            </div>
            <h3 className="text-4xl leading-6 font-medium text-blue-500 mt-12">50% Complete</h3>
            <div className="flex w-full">
              <div className="bg-red-500 w-full h-2"></div>
              <div className="bg-blue-500 w-full h-2"></div>
            </div>
            <div className="">
              <p className="text-4xl text-gray-500 text-center">ALMOST THERE COMPLETE THE FORM BELOW TO GET INSTANT ACCESS.</p>
            </div>
            <div className="">
              <p className="text-5xl text-gray-500 text-center">Enter Your Email Address to Access the First Lesson of the Course:</p>
            </div>
          </div>
          <div className="px-8">
              <p className="text-3xl">Email</p>
              <input type="text" className="border border-red-400" placeholder="Email addres" />
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 ">
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
