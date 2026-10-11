import React from 'react'
import { NavLink } from 'react-router'

export const Navbar = () => {
  return (
    <div>
        <NavLink to="/student">Dashboard</NavLink>
        <NavLink to="/student/courses" >Courses</NavLink>
        <NavLink to="/student/quizes" >Quizes</NavLink>
        <NavLink to="/student/dsa-questions" >DSA Questions</NavLink>
        <NavLink to="/student/assingments" >Assingments</NavLink>
        <NavLink to="/student/games" >Games</NavLink>
        <NavLink to="/student/daily-task" >Daily Task</NavLink>
        <NavLink to="/student/career-roadmaps" >Career Roadmaps</NavLink>
        <NavLink to="/student/ai-mentors" >AI Mentors</NavLink>
        <NavLink to="/student/resume-builder" >Resume Builder</NavLink>
        <NavLink to="/student/interviwe-preperation" >Interviwe Preperation</NavLink>
    </div>
  )
}
