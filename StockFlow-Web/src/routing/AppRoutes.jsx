import React from 'react'

import { Routes, Route } from "react-router-dom"

import { routes } from '@/data/routes'

function AppRoutes() {
    return (
        <Routes>
            {routes.map(({ route, page }) => (
                <Route key={route} path={route} element={page} />
            ))}

        </Routes>
    )
}

export default AppRoutes
