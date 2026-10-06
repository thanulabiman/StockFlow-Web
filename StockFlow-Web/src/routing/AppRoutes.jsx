import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { routes } from '@/data/routes'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({route,page})=> (
                    <Route key={route} path={route} element={page} />
                ))}

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
