import styled from "styled-components";
import { useState } from "react";

import { motion, AnimatePresence, Variants } from "framer-motion";
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
`;
const box = {
    invisible: {
        opacity: 0,
        x: 500,
        scale: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: -500,
        scale: 0,
        transition: {
            duration: 1,
        },
    },
};
function App() {
    const [visible, setVisible] = useState(1);
    const prev = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    const next = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    return (
        <Wrapper>
            <AnimatePresence>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
                    i === visible ? (
                        <Box
                            variants={box}
                            initial="invisible"
                            animate="visible"
                            exit="exit"
                            key={i}
                        >
                            {i}
                        </Box>
                    ) : null
                )}
            </AnimatePresence>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </Wrapper>
    );
}

export default App;
