import { useState } from "react";
import NavTitle from "../NavTitle/NavTitle";
import { motion } from "framer-motion";

const Brand = () => {
    const [showBrands, setShowBrands] = useState(true);
    const brands = [
        {
            _id: 9006,
            title: "Freeland",
        },
        {
            _id: 9007,
            title: "Polos - Men",
        },
        {
            _id: 9008,
            title: "Ecstasy BD",
        },
        {
            _id: 9009,
            title: "ROW Nation",
        },
        {
            _id: 9010,
            title: "Export ",
        },
    ];
    return (
        <div>
            <div
                onClick={() => setShowBrands(!showBrands)}
                className="cursor-pointer"
            >
                <NavTitle title="Shop by Brand" icons={true} />
            </div>
            {showBrands && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
                        {brands.map((item) => (
                            <li
                                key={item._id}
                                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default Brand;