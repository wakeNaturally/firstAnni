import { motion } from 'framer-motion';

import GridItem from "../components/grid";
import image1 from "../assets/blurr.jpg";
import image2 from "../assets/hands.jpg";
import image3 from "../assets/cartoon.jpg";
import image4 from "../assets/spider.jpg";
import image5 from "../assets/cafe.jpg";

// import Mushroom from '../assets/mushroom.jpg';
import Kitty from '../assets/kitty.jpg';
import Knit from '../assets/knit.jpg';

export default function HomePage() {
  const gridItems = [
    { id: 1, type: "image", content: image1 },
    { id: 2, type: "button" },
    { id: 3, type: "image", content: image2 },
    { id: 4, type: "button" },
    { id: 5, type: "image", content: image3 },
    { id: 6, type: "button" },
    { id: 7, type: "image", content: image4 },
    { id: 8, type: "button" },
    { id: 9, type: "image", content: image5 }
  ];

  return (
    <>
       <div className="container">
       <h1>Happy First Anniversary ❤️</h1>
            <div className="grid-container">
            {gridItems.map((item) => (
                <GridItem key={item.id} item={item} />
            ))}
            </div>
        </div> 

        <div>
        {/* <motion.div
            className="floating-character character-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <img src={Mushroom} alt="mushroom" />
        </motion.div> */}

        <motion.div
            className="floating-character character-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <img src={Knit} alt="knit" />
        </motion.div>

        

        <motion.div
            className="floating-character character-2"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <img src={Kitty} alt="kitty" />
        </motion.div>

        
        </div>

    </>
    
  );
}
