import { Box } from "@mui/material";
import MarkLatex from "../../atom/Marklatex/MarkLatex";


const ExamTextView = ({text}) => {
    return  (
        <Box
         mt={5}
         paddingX={{ xs: 4, md: 10 }}
         paddingY={2}
         sx={{
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: 600,
            height: 373,
            overflow: "auto",
            border: "1px solid #e1e1e1",
        }}>
            <h1>Hello world</h1>
            <MarkLatex content={text}/>
        </Box>
    )
}

export default ExamTextView;