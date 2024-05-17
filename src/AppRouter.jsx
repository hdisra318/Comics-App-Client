import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { Suspense } from 'react'

/** Pages */
import {IndexPage, Deseos, Producto} from './pages';

function AppRouter() {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' index element={
                        <Suspense fallback="Cargando...">
                            <IndexPage />
                        </Suspense>
                    } />

                    <Route path='/producto/:id' element={
                        <Suspense fallback="Cargando...">
                            <Producto />
                        </Suspense>
                    } />

                    <Route path='/deseos' element={
                        <Suspense fallback="Cargando...">
                            <Deseos />
                        </Suspense>
                    } />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter