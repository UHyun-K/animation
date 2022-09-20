import styled from "styled-components";
import { useRef } from "react";

import { motion, Variants } from "framer-motion";
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BiggerBox = styled.div`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const boxVariants = {
    hover: { rotate: 90 },
    click: { borderRadius: "100px" },
    drag: { backgroundColor: "rgb(52, 152, 219)", transition: { duration: 3 } },
};
function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box
                    drag
                    dragSnapToOrigin
                    dragElastic={0.5}
                    dragConstraints={biggerBoxRef}
                    variants={boxVariants}
                    whileDrag="drag"
                    whileHover="hover"
                    whileTap="click"
                />
            </BiggerBox>
        </Wrapper>
    );
}

export default App;
