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
    entry: (backPotato: boolean) => ({
        opacity: 0,
        x: backPotato ? -500 : 500,
        scale: 0,
    }),
    center: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: (backPotato: boolean) => ({
        opacity: 0,
        x: backPotato ? 500 : -500,
        scale: 0,
        transition: {
            duration: 1,
        },
    }),
};
function App() {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const prev = () => {
        setBack(true);
        setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    };
    const next = () => {
        setBack(false);
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };

    return (
        <Wrapper>
            <AnimatePresence custom={back}>
                <Box
                    custom={back}
                    variants={box}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={visible}
                >
                    {visible}
                </Box>
            </AnimatePresence>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </Wrapper>
    );
}

export default App;
