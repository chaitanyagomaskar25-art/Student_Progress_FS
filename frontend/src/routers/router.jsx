import React from 'react'
import { Login } from '../components/Login/Login'
import { createBrowserRouter } from "react-router"
import { StudentDashboaard } from '../pages/studentsPages/StudentDashboaard'
import { StudentsLayout } from '../layout/StudentsLayout/StudentsLayout'
import { Profile } from '../pages/studentsPages/Profile'
import { Courses } from '../pages/studentsPages/Courses'
import { Quizes } from '../pages/studentsPages/Quizes'
import { DSA_Question } from '../pages/studentsPages/DSA_Question'
import { Assingments } from '../pages/studentsPages/Assingments'
import { Games } from '../pages/studentsPages/Games'
import { Daily_Task } from '../pages/studentsPages/Daily_Task'
import { CareerRoadMap } from '../pages/studentsPages/CareerRoadMap'
import { AIMentor } from '../pages/studentsPages/AIMentor'
import { ResumeBuilder } from '../pages/studentsPages/ResumeBuilder'
import { Interview } from '../pages/studentsPages/Interview'

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    }, 
    {
        path: "/student",
        element: <StudentsLayout />,
        children: [
            {
                index: true,
                element: <StudentDashboaard />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "courses",
                element: <Courses />
            },
            {
                path: "quizes",
                element: <Quizes />
            },
            {
                path: "dsa-questions",
                element: <DSA_Question />
            }, {
                path: "assingments",
                element: <Assingments />
            }, {
                path: "games",
                element: <Games />
            }, {
                path: "daily-task",
                element: <Daily_Task />
            }, {
                path: "career-roadmaps",
                element: <CareerRoadMap />
            }, {
                path: "ai-mentors",
                element: <AIMentor />
            }, {
                path: "resume-builder",
                element: <ResumeBuilder />
            }, {
                path: "interviwe-preperation",
                element: <Interview />
            }

        ]
    },

])