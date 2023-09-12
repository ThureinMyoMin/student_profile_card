/* eslint-disable react/prop-types */
import ReactModal from "react-modal";
import { MdClose } from "react-icons/md";
import EditForm from "./EditForm";

const EditModal = ({ open, setOpen }) => {
  return (
    <ReactModal isOpen={open}>
      <div className="flex justify-between border-b-2 pb-4">
        <h2>Edit Box</h2>
        <button onClick={() => setOpen(false)}>
          <MdClose
            size={22}
            className="text-red-600 hover:scale-125 transition-all ease-in-out"
          />
        </button>
      </div>

      <EditForm setOpen={setOpen} />
    </ReactModal>
  );
};

export default EditModal;
