import styled from "styled-components";
import { useRef, useEffect } from "react";

import {
    motion,
    Variants,
    useMotionValue,
    useTransform,
    useViewportScroll,
} from "framer-motion";
const Wrapper = styled(motion.div)`
    height: 500vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient (135deg, rgb(238, 0, 153), rgba(221, 0, 28));
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
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-800, 800], [-360, 360]);
    useEffect(() => {
        rotate.onChange(() => console.log(rotate.get()));
    }, [x]);
    const gradient = useTransform(
        x,
        [-800, 0, 800],
        [
            "linear-gradient(135deg,rgb(106, 137, 204),rgb(130, 204, 221))",
            "linear-gradient(135deg,rgb(246, 185, 59),rgb(96, 163, 188))",
            "linear-gradient (135deg, rgb(238, 0, 153), rgba(221, 0, 28))",
        ]
    );
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0, 5]);
    return (
        <Wrapper style={{ background: gradient }}>
            <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin />
        </Wrapper>
    );
}

export default App;
