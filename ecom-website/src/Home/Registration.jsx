import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Registration() {
  return (
    <div className="overflow-hidden">
      <section className="bg-custom-image text-center lg:text-left bg-cover lg:bg-no-repeat lg:bg-150 bg-center py-4 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-5xl py-8 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white mt-4 flex flex-col justify-center">
            <p className="uppercase text-lg font-semibold mb-2">Save the day</p>
            <h2 className="text-3xl font-bold mb-4">
              Join a day-long free Workshop for Advanced{" "}
              <span className="text-yellow-300">Masterclass</span> On Sale
            </h2>
            <p className="text-xl mb-4">Limited Time Offer! Hurry Up</p>
          </div>
          <div className="bg-white bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Register Now
            </h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                phone: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-6">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter Your Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white p-3 rounded-lg hover:bg-purple-800 transition-colors duration-300"
                >
                  Register Now
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;
