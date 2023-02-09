import GridLayout from "../../../../GridOrg/GridLayout";
import LeftBar from "../../../../LeftBarOrg/LeftBar";
import HomeLeftBar from "../../../HomeLeftBar/HomeLeftBarV0";
import BottomNavBar from "../../../../../molecule/BottomNavBar/BottomNavBar";
import CategoryPagesFeedContent from "../../CategoryPages/CategoryPagesContentFeed/CategoryPagesContentFeed";
import CategoryPagesRightBar from "../../CategoryPages/CategoryPagesRightBar/CategoryPagesRightBar";
import { useLocation } from "react-router-dom";

const CategoryPagesMain = () => {
  const params = useLocation();

  return (
    <GridLayout
      leftBar={<HomeLeftBar />}
      middle={<CategoryPagesFeedContent item={params?.state?.item} />}
      rightBar={
        <CategoryPagesRightBar
          item={params?.state?.item}
          progress={params?.state.progress}
        />
      }
      bottomNav={<BottomNavBar currentPage="category" />}
    />
  );
};

export default CategoryPagesMain;
