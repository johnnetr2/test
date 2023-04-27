import { CircularProgress } from "@material-ui/core";
import { appColors } from "../../../utils/commonService";

const CirculerLoader = () => {
    return (
        <CircularProgress style={{ 'color': appColors.blueColor }} />
    )
}

export default CirculerLoader