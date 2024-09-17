import { Link } from "react-router-dom";

function PageHeader({ title, curentPage }) {
  return (
    <section className="bg-custom-image3 bg-cover bg-center py-20">
      <div className="container mx-auto text-center text-black">
        <h1 className="text-4xl font-bold mb-4 cursor-pointer hover:text-gray-900">
          {title}
        </h1>
        <div>
          <ul className="flex justify-center space-x-4 text-lg">
            <li>
              <Link to="/" className="hover:underline">
                Home /
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                {curentPage}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
