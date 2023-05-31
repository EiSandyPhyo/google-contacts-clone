import React from "react";
import ImageOne from "../assets/male.png";
import ImageTwo from "../assets/female.png";
import { HiPrinter } from "react-icons/hi2";
import { CiImport, CiExport, CiMenuKebab } from "react-icons/ci";
import {
  MdOutlineMenuOpen,
  MdStarOutline,
  MdOutlineEdit,
} from "react-icons/md";
import { LuFolderDown } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ContactLists = () => {
  let name = "Yancy Tear";
  console.log(name[0]);
  return (
    <div>
      <div className="flex flex-wrap justify-between w-[1200px] mx-auto ">
        <div className=" w-[1120px]">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="capitalize">name</th>
                <th className="capitalize">email</th>
                <th className="capitalize ">phone number</th>
                <th className="capitalize ">job title & company</th>
                <th className="capitalize ">Labels</th>
                <th>
                  <div className="flex items-center space-x-5">
                    <div
                      className="tooltip tooltip-bottom lowercase cursor-pointer"
                      data-tip="print"
                    >
                      <HiPrinter size={20} />
                    </div>
                    <div
                      className="tooltip tooltip-bottom lowercase cursor-pointer"
                      data-tip="import"
                    >
                      <CiImport size={20} />
                    </div>
                    <div
                      className="tooltip tooltip-bottom lowercase cursor-pointer"
                      data-tip="export"
                    >
                      <CiExport size={20} />
                    </div>
                    <div
                      className="tooltip tooltip-bottom capitalize cursor-pointer"
                      data-tip="list settings"
                    >
                      <CiMenuKebab size={20} />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <div className="my-4">
              <p className=" uppercase text-xs text-[#91979b] ml-4 tracking-widest">
                contacts (4)
              </p>
            </div>
            <tbody>
              {/* row 1 */}
              <tr className="hover group relative">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar group-hover:invisible">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={ImageOne}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="invisible group-hover:visible absolute left-3 top-[1.85rem]">
                      <label>
                        <input type="checkbox" className="checkbox " />
                      </label>
                    </div>
                    <div>
                      <div className="font-semibold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>+959785231234</td>
                <td>Desktop Support Technician</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <td>
                  <div className="invisible group-hover:visible absolute h-full top-0 right-4 gap-5 sm:flex items-center">
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
              {/* row 2 */}
              <tr className="hover group relative">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar group-hover:invisible">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={ImageTwo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="invisible group-hover:visible absolute left-3 top-[1.85rem]">
                      <label>
                        <input type="checkbox" className="checkbox " />
                      </label>
                    </div>
                    <div>
                      <div className="font-semibold">Brice Swyre</div>
                    </div>
                  </div>
                </td>
                <td>Carroll Group</td>
                <td>+959785231234</td>
                <td>Tax Accountant</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <td>
                  <div className="invisible group-hover:visible absolute h-full top-0 right-4 gap-5 sm:flex items-center">
                    <button className="h-full">
                      <MdStarOutline size={20} />
                    </button>
                    <button className="h-full">
                      <MdOutlineEdit size={20} />
                    </button>
                    <button>
                      <CiMenuKebab size={20} />
                    </button>
                  </div>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="hover group relative">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar group-hover:invisible">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={ImageOne}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="invisible group-hover:visible absolute left-3 top-[1.85rem]">
                      <label>
                        <input type="checkbox" className="checkbox " />
                      </label>
                    </div>
                    <div>
                      <div className="font-semibold">Marjy Ferencz</div>
                    </div>
                  </div>
                </td>
                <td>Rowe-Schoen</td>
                <td>+959785231234</td>
                <td> Office Assistant I</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <td>
                  <div className="invisible group-hover:visible absolute h-full top-0 right-4 gap-5 sm:flex items-center">
                    <button className="h-full">
                      <MdStarOutline size={20} />
                    </button>
                    <button className="h-full">
                      <MdOutlineEdit size={20} />
                    </button>
                    <button>
                      <CiMenuKebab size={20} />
                    </button>
                  </div>
                </td>
              </tr>
              {/* row 4 */}
              <tr className="hover group relative">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar group-hover:invisible">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`https://ui-avatars.com/api/?name=${name[0]}&background=random&font-size=0.5`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="invisible group-hover:visible absolute left-3 top-[1.85rem]">
                      <label>
                        <input type="checkbox" className="checkbox " />
                      </label>
                    </div>
                    <div>
                      <div className="font-semibold">Yancy Tear</div>
                    </div>
                  </div>
                </td>
                <td>Wyman-Ledner</td>
                <td>+959785231234</td>
                <td>Community Outreach Specialist</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <td>
                  <div className="invisible group-hover:visible absolute h-full top-0 right-4 gap-5 sm:flex items-center">
                    <button className="h-full">
                      <MdStarOutline size={20} />
                    </button>
                    <button className="h-full">
                      <MdOutlineEdit size={20} />
                    </button>
                    <button>
                      <CiMenuKebab size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
        <div className=" h-14 space-x-5 relative">
          <div className="absolute w-16 top-[0.9rem] right-0">
            <div
              className="tooltip tooltip-bottom capitalize cursor-pointer text-xs"
              data-tip="show sidebar"
            >
              <button className="btn btn-ghost btn-xs ">
                <MdOutlineMenuOpen size={23} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLists;
