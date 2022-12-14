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
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Grid = styled.div`
    width: 50vw;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;
function App() {
    const [id, setId] = useState<null | string>(null);
    console.log(id);

    return (
        <Wrapper>
            <Grid>
                {["1", "2", "3", "4"].map((n) => (
                    <Box onClick={() => setId(n)} key={n} layoutId={n} />
                ))}
            </Grid>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        onClick={() => setId(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Box
                            layoutId={id}
                            style={{ width: 400, height: 400 }}
                        />
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
