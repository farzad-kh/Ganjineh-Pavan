"use client";
import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import SelectCat from "./module/SelectCat";
import ProductImage from "./module/ProductImage";
import FindProductBtn from "./module/FindProductBtn";
import ClearProductBtn from "./module/ClearProductBtn";
import BreadcrumbUi from "./ui/BreadcrumbUi";
import AttrSelect from "./module/AttrSelect";
import ModalUi from "./ui/ModalUi";
import { motion } from "motion/react";
const { Title } = Typography;

const Product = () => {
  const [categories, setCategories] = useState({
    main: ["Main Category 1", "Main Category 2", "Main Category 3"],
    second: ["Second Category 1", "Second Category 2", "Second Category 3"],
    third: ["Third Category 1", "Third Category 2", "Third Category 3"],
  });
  const comoboBoxDefult = [
    ["First Attribute 1", "First Attribute 2", "First Attribute 3"],
    ["Second Attribute 1", "Second Attribute 2", "Second Attribute 3"],
    ["Third Attribute 1", "Third Attribute 2", "Third Attribute 3"],
    ["Fourth Attribute 1", "Fourth Attribute 2", "Fourth Attribute 3"],
  ];
  const [selectedCategory, setSelectedCategory] = useState({
    main: null,
    second: null,
    third: null,
  });
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      categories: ["Main Category 1", "Main Category 2", "Main Category 3"],
      result: "",
    },
    {
      id: 2,
      title: "Product 2",
      categories: [
        "Second Category 1",
        "Second Category 2",
        "Second Category 3",
      ],
      result: "",
    },
    {
      id: 3,
      title: "Product 3",
      categories: ["Third Category 1", "Third Category 2", "Third Category 3"],
      result: "",
    },
  ]);
  const [selectedAttr, setSelectedAttr] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const [comboBoxes, setComboBoxes] = useState([
    ...comoboBoxDefult
  ]);

  const handleCategoryChange = (type, value) => {
    const newCategory = {
      ...selectedCategory,
      [type]: value,
    };

    const imageUrl = value?.split(" ").join("");
    setSelectedCategory(newCategory);
    setSelectedImage(imageUrl);

    const productsResults = products.map((item) =>
      item.categories.includes(value) ? { ...item, result: value } : item
    );

    setProducts(productsResults);
  };

  const clearForm = () => {
    setSelectedCategory({
      main: null,
      second: null,
      third: null,
    });
    setSelectedAttr([]);
    setSelectedImage(null);
    setProducts(products.map((item) => ({ ...item, results: "" })));
    setSelectedValues([]);

    setComboBoxes([...comoboBoxDefult]);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.categories.includes(selectedCategory.main) ||
      product.categories.includes(selectedCategory.second) ||
      product.categories.includes(selectedCategory.third)
    );
  });

  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex w-full justify-center max-md:p-4 px-7 py-9 gap-4 flex-wrap max-md:flex-col flex-row-reverse"
    >
      <div className="flex flex-1 flex-col md:mr-10 py-2 px-5">
        {/* Breadcrumbs */}
        <BreadcrumbUi selectedCategory={selectedCategory} />
        <Title
          style={{ fontSize: "2rem" }}
          className="uppercase mb-[6px] max-sm:text-center"
          level={1}
        >
          Products Finder
        </Title>

        {/* Category Selectors */}
        <div>
          <SelectCat
            categories={categories.main}
            selectedCategory={selectedCategory.main}
            placeHolderTitle={"Main Category"}
            selectVal={"main"}
            handleCategoryChange={handleCategoryChange}
          />
          <SelectCat
            categories={categories.second}
            selectedCategory={selectedCategory.second}
            placeHolderTitle={"Second Category"}
            selectVal={"second"}
            handleCategoryChange={handleCategoryChange}
          />
          <SelectCat
            categories={categories.third}
            selectedCategory={selectedCategory.third}
            placeHolderTitle={"Third Category"}
            selectVal={"third"}
            handleCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Attributes Selector */}
        <AttrSelect
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          comboBoxes={comboBoxes}
          setComboBoxes={setComboBoxes}
        />

        {/* Buttons */}
        <Flex style={{ margin: "20px 0 12px 0" }} gap={6}>
          <FindProductBtn showModal={setIsModalOpen} />
          <ClearProductBtn clearForm={clearForm} />
        </Flex>

        {/* Modal */}
        <ModalUi
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          filteredProducts={filteredProducts}
        />
      </div>

      {/* Product Image */}
      <ProductImage selectedImage={selectedImage} />
    </motion.section>
  );
};

export default Product;
