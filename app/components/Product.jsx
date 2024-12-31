"use client";
import { useState } from "react";
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

  const [selectedCategory, setSelectedCategory] = useState({
    main: null,
    second: null,
    third: null,
  });

  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCategoryChange = (type, value) => {
    const newCategory = {
      ...selectedCategory,
      [type]: value,
    };
    const imageUrl = newCategory[type].split(" ").join("");

    setSelectedCategory(newCategory);
    setSelectedImage(imageUrl);
  };

  const clearForm = () => {
    setSelectedCategory({
      main: null,
      second: null,
      third: null,
    });
    setSelectedAttributes([]);
    setSelectedImage(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex w-full justify-center  max-md:p-4 px-7 py-9 gap-4 flex-wrap max-md:flex-col flex-row-reverse"
    >
      <div className="flex   flex-1 flex-col md:mr-10 py-2 px-5">
        {/* Breadcrumbs */}
        <BreadcrumbUi selectedCategory={selectedCategory} />
        <Title
          style={{ fontSize: "2rem" }}
          className="uppercase mb-[6px] max-sm:text-center   "
          level={1}
        >
          Products finder
        </Title>

        {/* Category Selectors */}

        <div>
          <div>
            <SelectCat
              categories={categories.main}
              selectedCategory={selectedCategory.main}
              placeHolderTitle={"Main Category"}
              selectVal={"main"}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
          <div>
            <SelectCat
              categories={categories.second}
              selectedCategory={selectedCategory.second}
              placeHolderTitle={"Second Category"}
              selectVal={"second"}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
          <div>
            <SelectCat
              categories={categories.third}
              selectedCategory={selectedCategory?.third}
              placeHolderTitle={"Third Category"}
              selectVal={"third"}
              handleCategoryChange={handleCategoryChange}
            />
          </div>
        </div>

        {/* Attributes Selector */}

        {/* Selected Attr */}
        <AttrSelect
          selectedAttributes={selectedAttributes}
          setSelectedAttributes={setSelectedAttributes}
        />
        {/* Buttons */}
        <Flex style={{ margin: "20px 0 12px 0" }} gap={6}>
          <FindProductBtn showModal={setIsModalOpen} />
          <ClearProductBtn clearForm={clearForm} />
        </Flex>

        {/* Modal */}
        <ModalUi setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
          {"The modal is displayed here for showing products"}
        </ModalUi>
      </div>

      {/* images */}

      <ProductImage
        selectedImage={selectedImage}
        selectedAttributes={selectedAttributes}
      />
    </motion.section>
  );
};

export default Product;
