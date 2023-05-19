import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const product = {
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
};

export default function Car() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData]: any = useState([]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleDelete = async () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/products/${id}`)
      .catch((error) => {
        console.error("Error:", error);
      });

    router.push("/dashboard/");
    console.log(
      `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/products/${id}`
    );
  };
  const fetchData = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/products/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a href="" className="mr-2 text-sm font-medium text-gray-900">
                  {data.brand}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <p className="font-medium text-gray-500 hover:text-gray-600">
                {data.model}
              </p>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data.model}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl tracking-tight text-gray-900">
              {parseInt(data.price).toLocaleString("en-US", {
                style: "currency",
                currency: "AED",
              })}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <p className="text-1xl tracking-tight text-gray-500">SUV</p>
            </div>

            <div>
              <div className="mt-10 flex">
                {/* Colors */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    EXTERIOR COLOUR
                  </h3>

                  <div className="flex items-center space-x-3 mt-4">
                    <div
                      className="h-8 w-8 rounded-full"
                      style={{
                        ["backgroundColor" as any]: data.exterior_color,
                      }}
                    ></div>
                  </div>
                </div>
                {/* Colors */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    INTERIOR COLOUR
                  </h3>

                  <div className="flex items-center space-x-3 mt-4">
                    <div
                      className="h-8 w-8 rounded-full"
                      style={{
                        ["backgroundColor" as any]: data.interior_color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleDelete}
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Item
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{data.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>

              <div className="mt-4">
                <ul role="list" className="list-none space-y-2 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      YEAR: <span className="text-black">{data.year}</span>
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      PRICE:{" "}
                      <span className="text-black">
                        {parseInt(data.price).toLocaleString("en-US", {
                          style: "currency",
                          currency: "AED",
                        })}
                      </span>
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      GAS: <span className="text-black">{data.gas}</span>
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      LOCATION:{" "}
                      <span className="text-black">{data.location}</span>
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      TRANSMISSION:{" "}
                      <span className="text-black">{data.transmission}</span>
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      CONDITION:{" "}
                      <span className="text-black">{data.condition}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
