import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { TypeOf, number, object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = object({
  brand: string().nonempty({
    message: "Brand is required",
  }),
  model: string().nonempty({
    message: "Model is required",
  }),
  transmission: string().nonempty({
    message: "Transmission is required",
  }),
  exterior_color: string().nonempty({
    message: "Exterior Color is required",
  }),
  interior_color: string().nonempty({
    message: "Interior Color is required",
  }),
  condition: string().nonempty({
    message: "Condition is required",
  }),
  price: string().nonempty({ message: "Price is required" }),
  year: string().nonempty({ message: "Year is required" }),
  description: string()
    .nonempty({
      message: "Description is required",
    })
    .min(60, "Description should be at least 60 characters long"),
  location: string().nonempty({
    message: "Location is required",
  }),
  gas: string().nonempty({
    message: "Gas is required",
  }),
  thumbnail: string().nonempty({
    message: "Thumbnail is required",
  }),
  images: string()
    .nonempty({
      message: "Images is required",
    })
    .transform((value) => value.split(",")),
});

type CreateUserInput = TypeOf<typeof createUserSchema>;

function add() {
  const router = useRouter();
  const [registerError, setRegisterError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });
  async function onSubmit(values: CreateUserInput) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/products`,
        values
      );
      router.push("/dashboard/");
    } catch (e: any) {
      setRegisterError(e.message);
    }
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Add Product
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-red-500">{registerError}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="brand"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Brand name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="brand"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("brand")}
                      />
                      <small className="text-red-700">
                        {errors.brand?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="model"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Model name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="last-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("model")}
                      />
                      <small className="text-red-700">
                        {errors.model?.message as string}
                      </small>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="transmission"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Transmission
                    </label>
                    <div className="mt-2">
                      <select
                        id="transmission"
                        {...register("transmission")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>Select</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                      <small className="text-red-700">
                        {errors.transmission?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="description"
                        {...register("description")}
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                      <small className="text-red-700">
                        {errors.description?.message as string}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2 ">
                    <label
                      htmlFor="condition"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Condition
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("condition")}
                        id="condition"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <small className="text-red-700">
                        {errors.condition?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="exterior"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Exterior Colour
                    </label>
                    <div className="mt-2">
                      <input
                        type="color"
                        {...register("exterior_color")}
                        onChange={(event) => {
                          register("exterior_color");
                          console.log(event.target.value);
                        }}
                        id="exterior"
                        className=" w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                      />
                      <small className="text-red-700">
                        {errors.exterior_color?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="interior"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Interior Colour
                    </label>
                    <div className="mt-2">
                      <input
                        type="color"
                        {...register("interior_color")}
                        onChange={(event) => {
                          register("interior_color");
                          console.log(event.target.value);
                        }}
                        id="interior"
                        className=" w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                      />
                      <small className="text-red-700">
                        {errors.interior_color?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="thumbnail"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Car Thumbnail Link
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="thumbnail"
                        {...register("thumbnail")}
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                      <small className="text-red-700">
                        {errors.thumbnail?.message as string}
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2 ">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        {...register("price")}
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <small className="text-red-700">
                        {errors.price?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="sm:col-span-2 ">
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Year
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        {...register("year")}
                        id="year"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <small className="text-red-700">
                        {errors.year?.message as string}
                      </small>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("location")}
                        id="location"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <small className="text-red-700">
                        {errors.location?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="gas"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Run on
                    </label>
                    <div className="mt-2">
                      <select
                        id="gas"
                        {...register("gas")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>Select</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Electric">Electric</option>
                      </select>
                      <small className="text-red-700">
                        {errors.gas?.message as string}
                      </small>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="images"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Car Images Links
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="images"
                        {...register("images")}
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                      <small className="text-red-700">
                        {errors.images?.message as string}
                      </small>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Paste Links of the image with coma seprating them
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default add;
