"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/dashboard/loading";
import { Mail, Phone, Trash2 } from "lucide-react";

// format Date like 1990-12-12
const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const getUsers = async () => {
  const res = await fetch("/api/booking", {
    next: { revalidate: 0 },
  });
  const result = await res.json();
  return result.data;
};
// getUsers().then((results) => console.log('log result:',results))

const Users = () => {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((result) => {
        // console.log(result);
        setUsers(result);
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, []);

  // Delete function
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch("/api/booking", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        console.log("User deleted successfully");
        setUsers((users) => {
          return users.filter((user) => (user as any).id !== id);
        });
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Booking Requests
      </h2>

      <div className="overflow-x-auto">
        {loading ? (
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  ID
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Name
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Email
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Phone
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Tour
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Transport
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Adults
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Children
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Start Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  End Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Message
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((items) => {
                const {
                  id,
                  name,
                  email,
                  phonenumber,
                  tourname,
                  transport,
                  adults,
                  children,
                  startdate,
                  enddate,
                  splmessage,
                } = items;
                return (
                  <tr
                    key={id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4 text-sm text-gray-600">{id}</td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                      {name}
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href={`mailto:${email}`}
                        className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        {email}
                      </a>
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href={`tel:${phonenumber}`}
                        className="text-sm text-green-600 hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        {phonenumber}
                      </a>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {tourname}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {transport}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {adults}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {children}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {formatDate(startdate)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {formatDate(enddate)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 max-w-xs truncate">
                      {splmessage}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleDelete(id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Users;
