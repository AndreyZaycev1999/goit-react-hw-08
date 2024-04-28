import css from "./Contact.module.css";
import { FaUserLarge, FaPhone, FaTrashCan } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contact_item}>
      <div>
        <p className={css.element_contact}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.element_contact}>
          <FaPhone />
          {contact.number}
        </p>
      </div>

      <button onClick={handleDelete}>
        Delete <FaTrashCan />
      </button>
    </li>
  );
};

export default Contact;
