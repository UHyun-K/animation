import styled from "styled-components";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient (135deg, rgb(238, 0, 153), rgba(221, 0, 28));
`;
const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    position: absolute;
    top: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
    inital: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opcity: 1,
        scale: 1,
        rotate: 360,
    },
    leaving: {
        opcity: 0,
        scale: 0,
        y: 50,
    },
};
function App() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    return (
        <Wrapper>
            <button onClick={toggleShowing}>click</button>
            <AnimatePresence>
                {showing ? (
                    <Box
                        variants={boxVariants}
                        initial="initial"
                        animate="visible"
                        exit="leaving"
                    />
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
