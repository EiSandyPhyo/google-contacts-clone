import React from "react";
import { HiPrinter } from "react-icons/hi2";
import { CiExport, CiMenuKebab } from "react-icons/ci";
import { MdStarOutline, MdOutlineEdit } from "react-icons/md";
import { LuFolderDown } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ContactLists = ({ contact }) => {
  let address =
    contact.address.city +
    " " +
    contact.address.number +
    " " +
    contact.address.street;
  console.log(contact.address.city + " " + contact.address.street);
  return (
    <tr className="hover group relative">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar group-hover:invisible">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={`https://ui-avatars.com/api/?name=${contact.username[0]}&background=random&font-size=0.5`}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          {/* checkbox visible */}
          <div className="invisible group-hover:visible absolute ">
            <label>
              <input type="checkbox" className="checkbox " />
            </label>
          </div>
          <div>
            <div className="font-semibold capitalize">{contact.username}</div>
          </div>
        </div>
      </td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{address}</td>
      {/* single hover */}
      <td>
        <div className="invisible group-hover:visible absolute h-full top-0 right-3 gap-4 flex flex-wrap justify-center sm:flex items-center">
          <button className="h-full">
            <div
              className=" tooltip tooltip-bottom capitalize"
              data-tip="star contact"
            >
              <MdStarOutline size={20} />
            </div>
          </button>
          <button className="h-full">
            <div
              className=" tooltip tooltip-bottom capitalize"
              data-tip="edit contact"
            >
              <MdOutlineEdit size={20} />
            </div>
          </button>
          <button className="h-full">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" m-1 cursor-pointer">
                <div
                  className=" tooltip tooltip-bottom capitalize"
                  data-tip="more actions "
                >
                  <CiMenuKebab size={20} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 bg-base-100 rounded-box w-52 shadow-3xl dropdown-content-bg"
              >
                <li>
                  <a>
                    <HiPrinter />
                    Print
                  </a>
                </li>
                <li>
                  <a>
                    <CiExport />
                    Export
                  </a>
                </li>
                <li>
                  <a>
                    <LuFolderDown />
                    Hide from contacts
                  </a>
                </li>
                <li>
                  <a>
                    <RiDeleteBin6Line />
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ContactLists;
