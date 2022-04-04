import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import FilledBtn from "../../../../../atom/FilledBtn/FilledBtn";
import BarChart from "../../../../../../assets/Icons/BarChart.svg";
import QuestionOption from "../../../../../../assets/Icons/QuestionOption.svg";
import Clock from "../../../../../../assets/Icons/Clock.svg";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  AppBar,
  Card,
  Paper,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Radio,
  FormControlLabel,
  Toolbar,
  Container,
  LinearProgress,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Correct from "../../../../../../assets/Imgs/correct.png";
import Wrong from "../../../../../../assets/Imgs/wrong.png";
import { EndPoints, instance2 } from "../../../../../service/Route";
import swal from "sweetalert";
import Timer from "../../../../../atom/Timer/timer";
import RightArrow from "../../../../../../assets/Icons/RightArrow.svg";
import LeftArrow from "../../../../../../assets/Icons/LeftArrow.svg";
import Increment from "../../../../../../assets/Icons/Increment.svg";
import Decrement from "../../../../../../assets/Icons/Decrement.svg";
import DimLeftArrow from "../../../../../../assets/Icons/DimLeftArrow.svg";
import DimRightArrow from "../../../../../../assets/Icons/DimRightArrow.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { SettingsRemoteRounded } from "@mui/icons-material";
import AlertDialogSlide from "../../../../../molecule/QuitTaskPopup/QuitTaskPopup";
import DropPenPopup from "../../../../../molecule/DropPenPopup/DropPenPopup";
import ResultFooter from "../../../../../molecule/ResultFooter/ResultFooter";
import MarkLatex from "../../../../../atom/Marklatex/MarkLatex";
import QuestionViewDTKOrg from '../QuestionViewDtkOrg/QuestionViewDtkOrg'
import Question from "../../../../../atom/Question/question";

const QuestionViewXyzOrg = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  // const [attemptedQuestion, setAttemptedQuestion] = useState([])
  const [quiz, setQuiz] = useState();
  const params = useLocation();
  const [status, setStatus] = useState(true);
  const [timeLeft, setTimeLeft] = useState();
  const time = 5;
  const [open, setOpen] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  let multiple = {
      '_id': '11',
      'title': 'Ormbett',
      'type': 'multiple',
      'paragraph': 'Varje år inträffar uppskattningsvis cirka 300 bett av huggorm (Vipera berus) i Sverige. De flesta bitna kommer i något skede i kontakt med sjukvården. I flertalet av dessa fall konsulteras Giftinformationscentralen, som då har möjlighet att följa förloppet genom upprepade  kontakter med behandlande läkare samt även få tillgång till epikriser. Allvarlighetsgraden varierar avsevärt, men ett fyrtiotal patienter årligen utvecklar uttalade lokala reaktioner och/eller toxisk systempåverkan som blir in-tensivvårdskrävande. Dödsfall har förekommit, men det senaste kända fallet i Sverige ligger närmare 20 år till-baka i tiden.Trots i övrigt framgångsrika behandlingsrutiner har det dock visat sig svårt att undvika att vissa patienter får omfattande lokalreaktioner som fortsätter att breda ut sig under de första dygnen. Orsaken till detta är oftast att serum (antitoxin) inte getts alls, getts för sent eller att upprepade doser inte kommit till stånd vid symtom-recidiv. För att försöka komma till rätta med',
      'questions': [
        {
          "_id": "6245b418fcd4503768220a7d",
          "question": {
            "images": [],
            "_id": "6245b3e6fcd4503768220a76",
            "questionCategory": {
              "_id": "62456524b099e234602868c5",
              "title": "Algebra",
              "sectionCategory": "6245607e50f1be1940e1567e",
              "createdAt": "2022-03-31T08:24:04.777Z",
              "updatedAt": "2022-03-31T08:24:04.777Z",
              "__v": 0
            },
            "year": "624566f9b099e234602868da",
            "sectionCategories": "6245607e50f1be1940e1567e",
            "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
            "createdAt": "2022-03-31T14:00:06.441Z",
            "updatedAt": "2022-03-31T14:00:06.441Z",
            "__v": 0
          },
          "options": [
            {
              "_id": "6245b418fcd4503768220a7e",
              "value": "2",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a7f",
              "value": "$\frac{5}{2}$",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a80",
              "value": "$\frac{9}{4}$",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a81",
              "value": "11",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a82",
              "value": "",
              "image": "",
              "type": ""
            }
          ],
          "createdAt": "2022-03-31T14:00:56.207Z",
          "updatedAt": "2022-03-31T14:00:56.207Z",
          "__v": 0
        }, 
        {
            "images": [],
            "_id": "6245b3e6fcd4503768220a76",
            "type": 'multiple',
            "questionCategory": {
              "_id": "62456524b099e234602868c5",
              "title": "Algebra",
              "sectionCategory": "6245607e50f1be1940e1567e",
            },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
          "options": [
            {
              "_id": "6245b418fcd4503768220a7e",
              "value": "2",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a7f",
              "value": "$\frac{5}{2}$",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a80",
              "value": "$\frac{9}{4}$",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a81",
              "value": "11",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a82",
              "value": "",
              "image": "",
              "type": ""
            }
          ],
        },
        {
          "images": [],
          "_id": "6245b3e6fcd4503768220a76",
          "type": 'multiple',
          "questionCategory": {
            "_id": "62456524b099e234602868c5",
            "title": "Algebra",
            "sectionCategory": "6245607e50f1be1940e1567e",
          },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
          "options": [
            {
              "_id": "6245b418fcd4503768220a7e",
              "value": "2",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a7f",
              "value": "$\frac{5}{2}$",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a80",
              "value": "$\frac{9}{4}$",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a81",
              "value": "11",
              "image": "",
              "type": "Math"
            },
            {
              "_id": "6245b418fcd4503768220a82",
              "value": "",
              "image": "",
              "type": ""
            }
          ],
        },
      ]
  }

  const data = {
    "_id": "624a8b99a010e32b0035a8b4",
    "quiz": [
      {
        "_id": "6245b418fcd4503768220a7d",
        "question": {
          "images": [],
          "_id": "6245b3e6fcd4503768220a76",
          "questionCategory": {
            "_id": "62456524b099e234602868c5",
            "title": "Algebra",
            "sectionCategory": "6245607e50f1be1940e1567e",
            "createdAt": "2022-03-31T08:24:04.777Z",
            "updatedAt": "2022-03-31T08:24:04.777Z",
            "__v": 0
          },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
          "createdAt": "2022-03-31T14:00:06.441Z",
          "updatedAt": "2022-03-31T14:00:06.441Z",
          "__v": 0
        },
        "options": [
          {
            "_id": "6245b418fcd4503768220a7e",
            "value": "2",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b418fcd4503768220a7f",
            "value": "$\frac{5}{2}$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b418fcd4503768220a80",
            "value": "$\frac{9}{4}$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b418fcd4503768220a81",
            "value": "11",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b418fcd4503768220a82",
            "value": "",
            "image": "",
            "type": ""
          }
        ],
        "createdAt": "2022-03-31T14:00:56.207Z",
        "updatedAt": "2022-03-31T14:00:56.207Z",
        "__v": 0
      },

      {
        '_id': '11',
        'title': 'Ormbett',
        'type': 'multiple',
        'paragraph': 'Varje år inträffar uppskattningsvis cirka 300 bett av huggorm (Vipera berus) i Sverige. De flesta bitna kommer i något skede i kontakt med sjukvården. I flertalet av dessa fall konsulteras Giftinformationscentralen, som då har möjlighet att följa förloppet genom upprepade  kontakter med behandlande läkare samt även få tillgång till epikriser. Allvarlighetsgraden varierar avsevärt, men ett fyrtiotal patienter årligen utvecklar uttalade lokala reaktioner och/eller toxisk systempåverkan som blir in-tensivvårdskrävande. Dödsfall har förekommit, men det senaste kända fallet i Sverige ligger närmare 20 år till-baka i tiden.Trots i övrigt framgångsrika behandlingsrutiner har det dock visat sig svårt att undvika att vissa patienter får omfattande lokalreaktioner som fortsätter att breda ut sig under de första dygnen. Orsaken till detta är oftast att serum (antitoxin) inte getts alls, getts för sent eller att upprepade doser inte kommit till stånd vid symtom-recidiv. För att försöka komma till rätta med',
        'questions': [
          {
            "_id": "6245b418fcd4503768220a7d",
            "question": {
              "images": [],
              "_id": "6245b3e6fcd4503768220a76",
              "questionCategory": {
                "_id": "62456524b099e234602868c5",
                "title": "Algebra",
                "sectionCategory": "6245607e50f1be1940e1567e",
                "createdAt": "2022-03-31T08:24:04.777Z",
                "updatedAt": "2022-03-31T08:24:04.777Z",
                "__v": 0
              },
              "year": "624566f9b099e234602868da",
              "sectionCategories": "6245607e50f1be1940e1567e",
              "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
              "createdAt": "2022-03-31T14:00:06.441Z",
              "updatedAt": "2022-03-31T14:00:06.441Z",
              "__v": 0
            },
            "options": [
              {
                "_id": "6245b418fcd4503768220a7e",
                "value": "2",
                "image": "",
                "type": "Math"
              },

              {
                "_id": "6245b418fcd4503768220a80",
                "value": "$\frac{9}{4}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a81",
                "value": "11",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a82",
                "value": "",
                "image": "",
                "type": ""
              }
            ],
            "createdAt": "2022-03-31T14:00:56.207Z",
            "updatedAt": "2022-03-31T14:00:56.207Z",
            "__v": 0
          },
          {
            "images": [],
            "_id": "6245b3e6fcd4503768220a76",
            "type": 'multiple',
            "questionCategory": {
              "_id": "62456524b099e234602868c5",
              "title": "Algebra",
              "sectionCategory": "6245607e50f1be1940e1567e",
            },
            "year": "624566f9b099e234602868da",
            "sectionCategories": "6245607e50f1be1940e1567e",
            "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
            "options": [
              {
                "_id": "6245b418fcd4503768220a7e",
                "value": "2",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a7f",
                "value": "$\frac{5}{2}$",
                "image": "",
                "type": "Math"
              },

              {
                "_id": "6245b418fcd4503768220a81",
                "value": "11",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a82",
                "value": "",
                "image": "",
                "type": ""
              }
            ],
          },
          {
            "images": [],
            "_id": "6245b3e6fcd4503768220a76",
            "type": 'multiple',
            "questionCategory": {
              "_id": "62456524b099e234602868c5",
              "title": "Algebra",
              "sectionCategory": "6245607e50f1be1940e1567e",
            },
            "year": "624566f9b099e234602868da",
            "sectionCategories": "6245607e50f1be1940e1567e",
            "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
            "options": [
              {
                "_id": "6245b418fcd4503768220a7e",
                "value": "2",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a80",
                "value": "$\frac{9}{4}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a81",
                "value": "11",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a82",
                "value": "",
                "image": "",
                "type": ""
              }
            ],
          },
        ]
      },

      {
        "_id": "6245b5e6fcd4503768220ac5",
        "question": {
          "images": [],
          "_id": "6245b5b6fcd4503768220abe",
          "questionCategory": {
            "_id": "62456524b099e234602868c5",
            "title": "Algebra",
            "sectionCategory": "6245607e50f1be1940e1567e",
            "createdAt": "2022-03-31T08:24:04.777Z",
            "updatedAt": "2022-03-31T08:24:04.777Z",
            "__v": 0
          },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "Det finns två kvadrater, en gul och en röd. Sidan i den gula kvadraten är 6 cm längre \nän sidan i den röda kvadraten. Den gula kvadratens area är 48 cm$^2$ större än den röda \nkvadratens area. **Hur stor area har den röda kvadraten?**",
          "createdAt": "2022-03-31T14:07:50.082Z",
          "updatedAt": "2022-03-31T14:07:50.082Z",
          "__v": 0
        },
        "options": [
          {
            "_id": "6245b5e6fcd4503768220ac6",
            "value": "1 cm$^2$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b5e6fcd4503768220ac7",
            "value": "16 cm$^2$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b5e6fcd4503768220ac8",
            "value": "25 cm$^2$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b5e6fcd4503768220ac9",
            "value": "36 cm$^2$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b5e6fcd4503768220aca",
            "value": "",
            "image": "",
            "type": ""
          }
        ],
        "createdAt": "2022-03-31T14:08:38.445Z",
        "updatedAt": "2022-03-31T14:08:38.445Z",
        "__v": 0
      },

      {
        '_id': '11',
        'title': 'Ormbett',
        'type': 'multiple',
        'paragraph': 'Varje år inträffar uppskattningsvis cirka 300 bett av huggorm (Vipera berus) i Sverige. De flesta bitna kommer i något skede i kontakt med sjukvården. I flertalet av dessa fall konsulteras Giftinformationscentralen, som då har möjlighet att följa förloppet genom upprepade  kontakter med behandlande läkare samt även få tillgång till epikriser. Allvarlighetsgraden varierar avsevärt, men ett fyrtiotal patienter årligen utvecklar uttalade lokala reaktioner och/eller toxisk systempåverkan som blir in-tensivvårdskrävande. Dödsfall har förekommit, men det senaste kända fallet i Sverige ligger närmare 20 år till-baka i tiden.Trots i övrigt framgångsrika behandlingsrutiner har det dock visat sig svårt att undvika att vissa patienter får omfattande lokalreaktioner som fortsätter att breda ut sig under de första dygnen. Orsaken till detta är oftast att serum (antitoxin) inte getts alls, getts för sent eller att upprepade doser inte kommit till stånd vid symtom-recidiv. För att försöka komma till rätta med',
        'questions': [
          {
            "_id": "6245b418fcd4503768220a7d",
            "question": {
              "images": [],
              "_id": "6245b3e6fcd4503768220a76",
              "questionCategory": {
                "_id": "62456524b099e234602868c5",
                "title": "Algebra",
                "sectionCategory": "6245607e50f1be1940e1567e",
                "createdAt": "2022-03-31T08:24:04.777Z",
                "updatedAt": "2022-03-31T08:24:04.777Z",
                "__v": 0
              },
              "year": "624566f9b099e234602868da",
              "sectionCategories": "6245607e50f1be1940e1567e",
              "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
              "createdAt": "2022-03-31T14:00:06.441Z",
              "updatedAt": "2022-03-31T14:00:06.441Z",
              "__v": 0
            },
            "options": [
              {
                "_id": "6245b418fcd4503768220a7e",
                "value": "2",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a7f",
                "value": "$\frac{5}{2}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a80",
                "value": "$\frac{9}{4}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a81",
                "value": "11",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a82",
                "value": "",
                "image": "",
                "type": ""
              }
            ],
            "createdAt": "2022-03-31T14:00:56.207Z",
            "updatedAt": "2022-03-31T14:00:56.207Z",
            "__v": 0
          },
          {
            "images": [],
            "_id": "6245b3e6fcd4503768220a76",
            "type": 'multiple',
            "questionCategory": {
              "_id": "62456524b099e234602868c5",
              "title": "Algebra",
              "sectionCategory": "6245607e50f1be1940e1567e",
            },
            "year": "624566f9b099e234602868da",
            "sectionCategories": "6245607e50f1be1940e1567e",
            "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
            "options": [
              {
                "_id": "6245b418fcd4503768220a7e",
                "value": "2",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a7f",
                "value": "$\frac{5}{2}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a80",
                "value": "$\frac{9}{4}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a81",
                "value": "11",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a82",
                "value": "",
                "image": "",
                "type": ""
              }
            ],
          },
          {
            "images": [],
            "_id": "6245b3e6fcd4503768220a76",
            "type": 'multiple',
            "questionCategory": {
              "_id": "62456524b099e234602868c5",
              "title": "Algebra",
              "sectionCategory": "6245607e50f1be1940e1567e",
            },
            "year": "624566f9b099e234602868da",
            "sectionCategories": "6245607e50f1be1940e1567e",
            "questionStatement": "*Vilket värde har x om* $\\mathbf{\\frac{x}{3}+\\frac{1}{4}=\\frac{11}{2}}?$",
            "options": [
              {
                "_id": "6245b418fcd4503768220a7e",
                "value": "2",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a7f",
                "value": "$\frac{5}{2}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a80",
                "value": "$\frac{9}{4}$",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a81",
                "value": "11",
                "image": "",
                "type": "Math"
              },
              {
                "_id": "6245b418fcd4503768220a82",
                "value": "",
                "image": "",
                "type": ""
              }
            ],
          },
        ]
      },

      {
        "_id": "6245b93bfcd4503768220b55",
        "question": {
          "images": [],
          "_id": "6245b8fcfcd4503768220b4e",
          "questionCategory": {
            "_id": "62456524b099e234602868c5",
            "title": "Algebra",
            "sectionCategory": "6245607e50f1be1940e1567e",
            "createdAt": "2022-03-31T08:24:04.777Z",
            "updatedAt": "2022-03-31T08:24:04.777Z",
            "__v": 0
          },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "**Vad är ** $\\mathbf{\\sqrt{36\\cdot10^{36}}}$**?**",
          "createdAt": "2022-03-31T14:21:48.764Z",
          "updatedAt": "2022-03-31T14:21:48.764Z",
          "__v": 0
        },
        "options": [
          {
            "_id": "6245b93bfcd4503768220b56",
            "value": "$18/cdot 10^{18}$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b93bfcd4503768220b57",
            "value": "$6/cdot 10^{18}$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b93bfcd4503768220b58",
            "value": "$18/cdot10 ^{6}$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b93bfcd4503768220b59",
            "value": "$6/cdot10^6$",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b93bfcd4503768220b5a",
            "value": "",
            "image": "",
            "type": ""
          }
        ],
        "createdAt": "2022-03-31T14:22:51.396Z",
        "updatedAt": "2022-03-31T14:22:51.396Z",
        "__v": 0
      },

      {
        "_id": "6245b4b3fcd4503768220a95",
        "question": {
          "images": [],
          "_id": "6245b47dfcd4503768220a8e",
          "questionCategory": {
            "_id": "62456524b099e234602868c5",
            "title": "Algebra",
            "sectionCategory": "6245607e50f1be1940e1567e",
            "createdAt": "2022-03-31T08:24:04.777Z",
            "updatedAt": "2022-03-31T08:24:04.777Z",
            "__v": 0
          },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "**Vilket svarsalternativ motsvarar ** $\\mathbf{x^2+x-12}$**?**",
          "createdAt": "2022-03-31T14:02:37.461Z",
          "updatedAt": "2022-03-31T14:02:37.461Z",
          "__v": 0
        },
        "options": [
          {
            "_id": "6245b4b3fcd4503768220a96",
            "value": "(x-3)(x-4)",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b4b3fcd4503768220a97",
            "value": "(x-3)(x+4)",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b4b3fcd4503768220a98",
            "value": "(x+3)(x-4)",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b4b3fcd4503768220a99",
            "value": "(x+3)(x+4)",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b4b3fcd4503768220a9a",
            "value": "",
            "image": "",
            "type": ""
          }
        ],
        "createdAt": "2022-03-31T14:03:31.792Z",
        "updatedAt": "2022-03-31T14:03:31.792Z",
        "__v": 0
      },

      {
        "_id": "6245b379fcd4503768220a65",
        "question": {
          "images": [],
          "_id": "6245b329fcd4503768220a5e",
          "questionCategory": {
            "_id": "62456524b099e234602868c5",
            "title": "Algebra",
            "sectionCategory": "6245607e50f1be1940e1567e",
            "createdAt": "2022-03-31T08:24:04.777Z",
            "updatedAt": "2022-03-31T08:24:04.777Z",
            "__v": 0
          },
          "year": "624566f9b099e234602868da",
          "sectionCategories": "6245607e50f1be1940e1567e",
          "questionStatement": "$8\\cdot2^m=4^0$\n\n**Vad är m?**",
          "createdAt": "2022-03-31T13:56:57.554Z",
          "updatedAt": "2022-03-31T13:56:57.554Z",
          "__v": 0
        },
        "options": [
          {
            "_id": "6245b379fcd4503768220a66",
            "value": "-3",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b379fcd4503768220a67",
            "value": "-2",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b379fcd4503768220a68",
            "value": "-1",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b379fcd4503768220a69",
            "value": "0",
            "image": "",
            "type": "Math"
          },
          {
            "_id": "6245b379fcd4503768220a6a",
            "value": "",
            "image": "",
            "type": ""
          }
        ],
        "createdAt": "2022-03-31T13:58:17.858Z",
        "updatedAt": "2022-03-31T13:58:17.858Z",
        "__v": 0
      }
    ],
    "time": 30,
    "value": true
  }



  const Next = (question) => {
    if (question.answerSubmited) {
      if (selectedIndex + 1 == quiz.length) {
        // last question
        // const obj = {
        //   quizId: params?.state?.data?._id,
        //   sectionCategory: params?.state?.sectionCategory,
        //   timeLeft: timeLeft,
        //   totalTime: time,
        //   quiz: quiz,
        // }
        localStorage.setItem('quizId', params?.state?.quizId)
        navigate("/resultsummary", {
          state: {
            quizId: params?.state?.data?._id,
            sectionCategory: params?.state?.sectionCategory,
            timeLeft: timeLeft,
            totalTime: time,
            quiz: quiz,
            quizId: params?.state?.quizId
          },
        });
      } else {
        setStatus(true);
        selectedIndex + 1 < quiz.length && setSelectedIndex(selectedIndex + 1);
      }
    } else {
      if (question.selectedIndex + 1) {
        const questions = [...quiz];
        let ques = questions[selectedIndex];
        const URL = EndPoints.getAnswerByQuestionId + ques.question._id;
        instance2.get(URL).then((response) => {
          ques.answer = response.data;
          ques.answerSubmited = true;
          setQuiz(questions);
          setStatus(false);
        });
        const data = {
          quiz: params?.state?.data?._id,
          user: localStorage.getItem("userId"),
          optionId: question.selectedOptionID,
          questionId: question.question._id,
          sectionCategory: params?.state?.sectionCategory,
        };
        const Submit = EndPoints.submitAnswer;
        instance2.post(Submit, data).then((response) => {
        });
      }
    }
  };

  // const exitsIndex = (index) => {
  //     const exist = attemptedQuestion.some(id => id == index)
  //     return exist;
  // }

  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    header: {
      minHeight: "10vh",
      backgroundColor: "#fff",
      border: "1px solid #b4b4b4",
    },
    appbar: {
      border: "1px solid #E1E1E1",
      backgroundColor: "#f9f9f9",
    },
    size: {
      width: 15,
      height: 15,
    },
    piechart_size: {
      width: 100,
    },
    center_align: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    color_progress: {
      backgroundColor: "#B4B4B4",
      color: "#6FCF97",
    },
    content: {
      minHeight: "90vh",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "90vw",
    },
  }));

  const classes = useStyles();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const questionToShow = params?.state?.questionIndex;
    if (questionToShow != undefined) {
      setSelectedIndex(questionToShow);
      setQuiz(params?.state?.quiz);
    } else {
      setQuiz(params?.state?.quiz);
    }

    // const id = localStorage.getItem('quizId')
    // if (id === params?.state?.quizId) {
    //   swal({ title: 'Det här frågesporten är redan försökt', icon: "warning", dangerMode: true, })
    //     .then((willDelete) => {
    //       if (willDelete) {
    //         window.location.href = '/login'
    //       } else {
    //         window.location.href = '/login'
    //       }
    //     });
    // }

  }, []);

  const SelectFunc = (e, optionIndex) => {
    const questions = [...quiz];
    let question = questions[selectedIndex];
    question.selectedIndex = optionIndex;
    question.selectedOptionID = e.target.value;
    setQuiz(questions);
  };

  function OptionIndex(index) {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        return "";
    }
  }

  const Options = (question, curentOption, optionIndex) => {
    if (question.answer && question.answer.option == curentOption._id) {
      return <img src={Correct} style={{ marginRight: "0.5rem" }} />;
    } else if (question.answer && optionIndex == question.selectedIndex) {
      return <img src={Wrong} style={{ marginRight: "0.5rem" }} />;
    }
    if (optionIndex == question.selectedIndex) {
      return <Radio color="primary" checked={true} />;
    } else {
      return <Radio color="primary" checked={false} />;
    }
  };

  const getSubmitButton = (question) => {
    if (params?.state?.questionIndex != undefined) {
      return (
        <ResultFooter
          questionLength={quiz.length}
          questionIndex={selectedIndex}
          onResultHandler={() =>
            navigate("/resultsummary", {
              state: {
                quizId: params?.state?.prevState?.quizId,
                sectionCategory: params?.state?.prevState?.sectionCategory,
                timeLeft: params?.state?.prevState?.timeLeft,
                totalTime: params?.state?.prevState?.totalTime,
                quiz: params?.state?.prevState?.quiz,
                quizId: params?.state?.quizId
              },
            })
          }
          onLeftClick={() => {
            setSelectedIndex((previousIndex) => previousIndex - 1);
          }}
          onRightClick={() => {
            setSelectedIndex((previousIndex) => previousIndex + 1);
          }}
        />
      );
    } else {
      return question.selectedIndex + 1 ? (
        <Box
          onClick={() => Next(question)}
          padding={1}
          mt={2}
          sx={{
            width: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#0A1596",
            borderRadius: ".3rem",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginRight: "0.5rem",
              color: "#FFFFFF",
            }}
          >
            Nästa
          </Typography>
        </Box>
      ) : (
        <Box
          padding={1}
          mt={2}
          sx={{
            width: 600,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "grey",
            borderRadius: ".3rem",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              marginRight: "0.5rem",
              color: "#FFFFFF",
            }}
          >
            Nästa
          </Typography>
        </Box>
      );
    }
  };

  const QuestionBody = ({ question }) => {
    console.log(question, 'questions')
    if(question.type == 'multiple') {
      return <QuestionViewDTKOrg question={question} />
    } else {
      return (
        <Container
          maxWidth="md"
          style={{
            marginTop: 0,
            backgroundColor: "#f9f9f9",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            mt={5}
            paddingX={6}
            paddingY={2}
            sx={{
              width: 600,
              height: 280,
              border: "1px solid #e1e1e1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >

            <Typography
              variant="h6"
              component="h6"
              style={{ fontSize: "0.75rem", fontWeight: "600", display: 'flex' }}
            >
              <MarkLatex content={question?.question?.questionStatement} />
            </Typography>

            {question?.question?.images[0] && <Typography
              variant="h6"
              component="h6"
              style={{ height: '12rem', display: 'flex', justifyContent: 'center' }}
            >
              <img style={{ height: '100%' }} src={question?.question?.images[0]} />

            </Typography>}

            {question?.question?.information1 && <Typography
              variant="h6"
              component="h6"
              style={{ fontSize: "0.75rem", fontWeight: "600" }}
            >
              <MarkLatex content={question?.question?.information1} />
            </Typography>}

            {question?.question?.information1 && <Typography
              variant="h6"
              component="h6"
              style={{ fontSize: "0.75rem", fontWeight: "600" }}
            >
              <MarkLatex content={question?.question?.information2} />
            </Typography>}

          </Box>
          <Box
            mt={5}
            sx={{
              backgroundColor: "#fff",
              width: 600,
              height: 240,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {question?.options?.map((item, optionIndex) => {
              if (item.value) {
                return (
                  <Box
                    sx={{
                      //   height: 120,
                      border: "1px solid #e1e1e1",
                      width: 300,
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FormControlLabel
                          onClick={(e) => {
                            !question?.answerSubmited && SelectFunc(e, optionIndex);
                          }}
                          style={{ marginLeft: ".5rem" }}
                          value={item?._id}
                          control={Options(question, item, optionIndex)}
                          label={OptionIndex(optionIndex)}
                        />
                      </Box>

                      <Box mt={2} ml={5}>
                        {item.image ? (
                          //   <img
                          //     className={classes.piechart_size}
                          //     // src={QuestionOption}
                          //     alt=""
                          //   />
                          <img src={item.image} />
                        ) : (
                          <Typography><MarkLatex content={item.value} /> </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>

          {question.answer && (
            <Box
              paddingX={4}
              mt={3}
              sx={{
                backgroundColor: "#fff",
                width: 600,
                height: 220,
                border: "1px solid #e1e1e1",
                overflow: 'auto',
                '&::-webkit-scrollbar': { display: 'none' }
                //   '&::-webkit-scrollbar': { width : 0 },
              }}
            >
              <Box sx={{ width: 500, display: "flex" }}>
                <Box>
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{
                      fontSize: ".75rem",
                      fontWeight: "600",
                      marginTop: 20,
                    }}
                  >
                    Förklaring:
                  </Typography>
                  <Typography
                    variant="body1"
                    component="div"
                    style={{
                      fontSize: ".75rem",
                      fontWeight: "500",
                      marginTop: 10,
                    }}
                  >
                    {/* {question.answer.answer} */}
                    <MarkLatex content={question.answer.answer} />
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  style={{
                    backgroundColor: "blue",
                    marginLeft: "15rem",
                    marginTop: "2rem",
                  }}
                >
                  {question.answer.image && (
                    <img
                      style={{ height: 110 }}
                      src={question.answer.image}
                      alt=""
                    />
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  height: 60,
                }}
              >
                <Typography
                  variant="body1"
                  component="body1"
                  style={{
                    fontSize: "0.7rem",
                    display: "flex",
                    justifySelf: "flex-end",
                  }}
                >
                  Berätta för oss om du var nöjd med lösningen
                </Typography>
                <Box ml={1} mr={0.5}>
                  <img src={Increment} alt="" />
                </Box>
                <Box mr={1}>
                  <img src={Decrement} alt="" />
                </Box>
              </Box>
            </Box>
          )}

          {/* {(params.state.questionIndex != undefined) ? (<ResultFooter/>) :  */}
          {getSubmitButton(question)}
          {/* }  */}
        </Container>
      );
    }
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        color="#fff"
        className={classes.appbar}
        style={{ boxShadow: "none" }}
        position="absolute"
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            onClick={() => params?.state?.questionIndex != undefined ? '' : setOpen(true)}
            sx={{
              height: "8vh",
              width: "2.3rem",
              display: "flex",
              alignItems: "center",
              borderRight: "1px solid #E1E1E1",
              cursor: "pointer",
            }}
          >
            <img style={{ height: "1.1rem" }} src={LeftArrow} alt="" />
          </Box>

          <Typography variant="body1" className={classes.center_align}>
            {params.state.sectionCategory.title}
          </Typography>

          <Box>
            <HelpOutlineIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        style={{ backgroundColor: "#fff", height: "fit-content" }}
      >
        <Container
          disableGutters
          maxWidth="md"
          style={{ backgroundColor: "#fff" }}
        >
          <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box mt={2} width={100} sx={{ color: "#222" }}>
              <img src={BarChart} alt="" />
              {selectedIndex + 1} av {quiz?.length}
            </Box>
            {params.state.data && params.state.data.value == true && (
              <Box
                mt={2}
                sx={{ color: "#222", display: "flex", flexDirection: "row" }}
              >
                <img src={Clock} alt="" />
                <Timer
                  continueStatus={status}
                  time={time}
                  timeleft={(timer) => setTimeLeft(timer)}
                  onCloseTimer={() => setTimeEnd(true)}
                />
              </Box>
            )}
          </Box>

          <Box
            mt={2}
            sx={{
              backgroundColor: "#b4b4b4",
              height: "8px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {data.quiz &&
              data?.quiz?.map((item, index) => {
               <Box
                        key={index}
                        sx={{
                          backgroundColor: item.answerSubmited
                            ? "#6fcf97"
                            : "#B4B4B4",
                          marginLeft: "2px",
                          flex: "1",
                        }}
                      ></Box>

              })}
          </Box>
        </Container>

        <AlertDialogSlide
          popUpstatus={open}
          handleClose={() => setOpen(false)}
          redirect={() =>
            navigate("/resultsummary", {
              state: {
                quizId: params?.state?.data?._id,
                sectionCategory: params?.state?.sectionCategory,
                timeLeft: timeLeft,
                totalTime: time,
                quiz: quiz,
                quizId: params?.state?.quizId
              },
            })
          }
        />

        <DropPenPopup
          popUpstatus={timeEnd}
          redirect={() =>
            navigate("/resultsummary", {
              state: {
                quizId: params?.state?.data?._id,
                sectionCategory: params?.state?.sectionCategory,
                timeLeft: 0,
                totalTime: time,
                quiz: quiz,
                quizId: params?.state?.quizId
              },
            })
          }
        />
        {data && 
        <QuestionBody question={data.quiz[selectedIndex]} />}
      </Container>
    </div>
  );
};

export default QuestionViewXyzOrg;
