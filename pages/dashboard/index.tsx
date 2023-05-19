import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";

const home = () => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="">
                <tr>
                  <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">
                    Brand
                  </th>
                  <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">
                    Model
                  </th>
                  <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">
                    Location
                  </th>
                  <th className="whitespace-nowrap px-4 text-start py-2 font-medium text-gray-900">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data.map((item: any, index: any) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.brand}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.model}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.location}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {parseInt(item.price).toLocaleString("en-US", {
                        style: "currency",
                        currency: "AED",
                      })}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link
                        href={`/dashboard/item/${item.productId}`}
                        className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white "
                      >
                        View
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <a
                        href="#"
                        className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white "
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default home;
