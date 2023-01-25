
import { EndPoints, instance2 } from "../../../service/Route";
import React, { useEffect, useState } from "react";

import GridLayout from "../../GridOrg/GridLayout";
import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import CoursesFeedContent from "../CoursesFeedContent/CoursesFeedContent";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import AppLoader from "../../../molecule/AppLoader";
import LeftBar from "../../LeftBarOrg/LeftBar";
import { useSelector } from "react-redux";

const CoursesMain = () => {
  const [previousExams, setPreviousExams] = useState();
  const [limit, setLimit] = useState(5);
  const [provHistoryData, setProvHistoryData] = useState("");
  const [provpassSeasons, setProvpassSeasons] = useState();
  const [provpassOrderBySeason, setProvpassOrderBySeason] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const userId = useSelector((state) => state.value.user._id);

  useEffect(async () => {
    const getPreviosExams = EndPoints.getPreviousExams + `?size=${limit}`;
    instance2.get(getPreviosExams).then((response) => {
      setPreviousExams(response.data.data);
      setProvpassOrderBySeason(response.data.provPassOrder);
      setIsLoading(false)
    });

    const URL = EndPoints.simuleraQuizHistory + userId;
    instance2.get(URL).then((response) => {
      if (response.data.length > 0) {
        let newArray = [];
        response.data &&
          response.data.map((item) => {
            let obj = item ?? {};
            let totalQuestions = 0;
            let totalAnswer = 0;
            let date;

            item.simuleraQuizResult.map((result) => {
              totalQuestions = totalQuestions + result.totalQuestions;
              totalAnswer = totalAnswer + result.correctAnswerCounter;
            });
            obj["totalQuestions"] = totalQuestions;
            obj["totalAnswer"] = totalAnswer;

            newArray.push(obj);
          });
        setProvHistoryData(newArray);

        let provPassArray = [];
        newArray?.map((item) => {
          const exist = provPassArray.some(
            (elem) => item.simuleraSeason?._id == elem.simuleraSeason?._id
          );
          if (!exist) {
            provPassArray.push(item);
          } else {
            const simuleraQ = provPassArray.find(
              (ques) => item.simuleraSeason._id == ques.simuleraSeason._id
            );
            const date1 = new Date(simuleraQ.createdAt);
            const date2 = new Date(item.createdAt);
            if (date1.getTime() < date2.getTime()) {
              const index = provPassArray.findIndex(
                (obj) => item.simuleraSeason._id == obj.simuleraSeason._id
              );
              provPassArray.splice(index, 1, item);
            }
          }
        });
        setProvpassSeasons(provPassArray);
      }
    });
  }, [limit]);

  const LoadMore = () => {
    setLimit((lim) => lim + 3);
  };

  return (
    <>
      <AppLoader isLoading={isLoading} />
      <GridLayout
        leftBar={<LeftBar />}
        middle={
          <CoursesFeedContent
            previousExams={previousExams}
            data={provHistoryData}
            loadMore={() => LoadMore()}
            seasons={provpassSeasons}
            provpassOrderBySeason={provpassOrderBySeason}
          />
        }
        rightBar={
          <CoursesRightBar
            data={provHistoryData}
            previousExams={previousExams}
          />
        }
        bottomNav={<BottomNavBar currentPage="course" />}
      />
    </>

  );
};

export default CoursesMain;
