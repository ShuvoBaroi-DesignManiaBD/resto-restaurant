
import HeroInnerPages from "../../Components/Hero/HeroInnerPages";
import { useAuth } from "../../Hooks/useAuth";
import { updateFood } from "../../APIs/foods";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateFood = ({ foodData, id, setOpen, refetch }) => {
  const location = useLocation()
  console.log(foodData, id);
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const ownerId = user?.uid;
    const name = form.foodName.value;
    const image = form.image.value;
    const category = form.foodCategory.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const ownerName = form.ownerName.value;
    const ownerEmail = form.ownerEmail.value;
    const country = form.country.value;
    const description = form.description.value;

    const data = { ownerId, name, image, category, quantity, price, ownerName, ownerEmail, country, description };
    console.log(data);
    toast.success('food updated successfully!')


    updateFood(id, data)
      .then(() => {
        setOpen(null) && toast.success('food updated successfully!')
        refetch()
        // navigate('/user/added-foods')
        // form.reset();
      })
      .catch(error => toast.error(`${error}`));
  }


  return (
    <>
      {/* <HeroInnerPages>
        Add food
      </HeroInnerPages> */}
      <section className="bg-white">
        <div className="container mx-auto">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16">
              <h2 className="mb-4 primaryHeading text-center font-bold text-gray-900 dark:text-white">
                Update <span className="text-primary primaryHeading">{foodData?.name}</span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-6 sm:gap-6">
                  {/* Food Name */}
                  <div className="col-span-6 md:col-span-3">
                    <label
                      htmlFor="foodName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Name
                    </label>
                    <input
                      type="text"
                      name="foodName"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type food name"
                      defaultValue={foodData?.name}
                      required
                    />

                  </div>

                  {/* Food Image */}
                  <div className="col-span-6 md:col-span-3">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Image
                    </label>
                    <input
                      type="url"
                      name="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="insert the image URL"
                      defaultValue={foodData?.image}
                      required
                    />

                  </div>

                  {/* Food category */}
                  <div className="col-span-3 md:col-span-2">
                    <label
                      htmlFor="foodCategory"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food category
                    </label>
                    <input
                      type="text"
                      name="foodCategory"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type food name"
                      defaultValue={foodData?.category}
                      required
                    />

                  </div>

                  {/* Quantity */}
                  <div className="col-span-3 w-full md:col-span-2">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="quantity"
                      defaultValue={foodData?.quantity}
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="col-span-3 w-full md:col-span-2">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$2999"
                      defaultValue={foodData?.price}
                      required
                    />
                  </div>

                  {/* Owner name */}
                  <div className="col-span-3 md:col-span-2">
                    <label
                      htmlFor="foodName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Owner name
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type owner name"
                      defaultValue={user?.displayName}
                      readOnly
                      required
                    />

                  </div>

                  {/* Owner email */}
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="foodName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Owner email
                    </label>
                    <input
                      type="email"
                      name="ownerEmail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type owner email"
                      defaultValue={user?.email}
                      readOnly
                      required
                    />

                  </div>

                  {/* Food Origin (Country */}
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Origin (Country)
                    </label>
                    <input
                      type="text"
                      name="country"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your food origin"
                      defaultValue={foodData?.country}
                      required
                    />

                  </div>

                  {/* A short description of the food item */}
                  <div className="col-span-6">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Short description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows={8}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your description here"
                      defaultValue={foodData?.description}
                      required
                    />
                  </div>

                </div>
                <button
                  type="submit"
                  className="primaryBtn mt-5"
                >
                  Update Food
                </button>
              </form>
            </div>
          </section>

        </div>
      </section>
    </>
  );
};

export default UpdateFood;