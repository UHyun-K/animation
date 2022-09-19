import styled from "styled-components";

import { motion, Variants } from "framer-motion";
const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const boxVariants: Variants = {};
function App() {
    return (
        <Wrapper>
            <Box
                whileHover={{ scale: 1.5, rotate: 90 }}
                whileTap={{ borderRadius: "100px" }}
            />
        </Wrapper>
    );
}

export default App;
