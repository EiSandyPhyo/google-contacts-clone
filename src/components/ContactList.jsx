import React, { useEffect, useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { CiImport, CiExport, CiMenuKebab } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
import ContactLists from "./ContactLists";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

  const lastPage = currentPage * pageSize;
  const firstPage = lastPage - pageSize;
  const currentPages = contacts.slice(firstPage, lastPage);
  const noOfPage = Math.ceil(contacts.length / pageSize);
  console.log(noOfPage);
  const numbers = [...Array(noOfPage + 1).keys()].slice(1);
  console.log(numbers);

  const currentPageHandle = (id) => {
    setCurrentPage(id);
    // console.log(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/users`);
    const data = await api.json();
    setContacts(data);
    // console.log(data);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between w-5/6 mx-auto max-w-[1200px]">
        <div className="w-[1120px]">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="capitalize w-1/5 max-[1003px]:w-1/3">name</th>
                <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:w-1/3">
                  email
                </th>
                <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:hidden">
                  phone number
                </th>
                <th className="capitalize w-1/5 max-[574px]:hidden max-[1003px]:hidden">
                  address
                </th>
                <th className="w-1/5 max-[574px]:w-2/5 max-[1003px]:1/3">
                  <div className="flex items-center space-x-5 justify-end">
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
                {contacts.length === 1
                  ? `contact (${contacts.length})`
                  : `contacts (${contacts.length})`}
              </p>
            </div>
            <tbody>
              {currentPages.map((contact) => {
                return <ContactLists key={contact.id} contact={contact} />;
              })}
            </tbody>
          </table>
        </div>
        <div className=" h-14 space-x-5 relative max-[574px]:hidden max-[1003px]:hidden lg:hidden 2xl:block">
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
      {contacts ? (
        <div className="flex flex-wrap justify-center mt-10">
          <div className="join">
            {numbers.map((no, i) => {
              return (
                <button
                  onClick={() => currentPageHandle(no)}
                  className={`join-item btn ${
                    currentPage === no ? "btn-active" : ""
                  }`}
                  key={i}
                >
                  {no}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
};

export default ContactList;
