const home = () => {
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
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-blue-600 px-4 py-2 text-xs font-medium text-white "
                    >
                      View
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white "
                    >
                      View
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default home;
