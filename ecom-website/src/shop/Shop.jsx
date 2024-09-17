import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { FiGrid } from "react-icons/fi";
import { CiBoxList } from "react-icons/ci";
import Data from "../Home/products.json";
import ProductCard from "./ProductCard";
import Search from "./Search";
import Category from "./Category";

function Shop() {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get the products for the current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle category click
  const handleCategoryClick = (cate) => {
    const filtered =
      cate === "All"
        ? Data
        : Data.filter((product) => product.category === cate);
    setProducts(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div>
      <PageHeader title="Shop Page" curentPage="Shop" />

      {/* shop page */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-12">
            <article>
              {/* layout and title */}
              <div className="flex justify-between items-center mb-6">
                <p>
                  Showing {currentProducts.length} of {products.length} Results
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setGridList(true)}
                    className={`p-2 ${
                      gridList ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    <FiGrid size={24} />
                  </button>
                  <button
                    onClick={() => setGridList(false)}
                    className={`p-2 ${
                      !gridList ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    <CiBoxList size={24} />
                  </button>
                </div>
              </div>
              {/* product card */}
              <div>
                <ProductCard gridList={gridList} products={currentProducts} />
              </div>
              {/* pagination */}
              <div className="flex justify-center mt-6">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 mx-1 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </article>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <aside>
              <Search products={products} gridList={gridList} />
              <Category products={Data} onCategoryClick={handleCategoryClick} />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
