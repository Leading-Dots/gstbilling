import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { Navigate } from 'react-router-dom'

const HomeRouter = () => {
    const {user } = useAuth()
    const userRole = user?.role
   

    if(!user) {
        return <Navigate to="/login" />
    }
    if(user) {
        return <Navigate to="/dashboard" />
    }
}

export default HomeRouter