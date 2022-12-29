import { CircularProgress } from "@material-ui/core";
import { appColors } from "../../service/commonService";

const CirculerLoader = () => {
    return (
        <CircularProgress style={{ 'color': appColors.blueColor }} />
    )
}

export default CirculerLoader