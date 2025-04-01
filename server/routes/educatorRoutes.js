import express from 'express'
import { addCourse, educatorDashboardData, getEducatorCourses, getEnrolledstudentsData, updateRoleToEducator } from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
import { protectEducator } from '../middlewares/authMiddleware.js'

const educatorRouter = express.Router()

//Add Educator role
educatorRouter.get('/update-role', updateRoleToEducator)
//Add course
educatorRouter.post('/add-course',upload.single('image'), protectEducator, addCourse)
//See Educator's courses
educatorRouter.get('/courses', protectEducator, getEducatorCourses)
educatorRouter.get('/dashboard', protectEducator, educatorDashboardData)
educatorRouter.get('/enrolled-students', protectEducator, getEnrolledstudentsData)


export default educatorRouter;