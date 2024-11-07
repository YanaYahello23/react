import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {ROUTES} from "./constants/router-contsnts.ts";
import NotFound from "./pages/NotFound.tsx";
import React from "react";
import Header from "./components/Header.tsx";
import Board from "./pages/Board.tsx";
import Details from "./pages/Details.tsx";
const LazyContacts = React.lazy(() => import("./pages/Contact.tsx"));


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className="p-5">
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path={ROUTES.home} element={<Home/>}/>
                        <Route path={ROUTES.contacts} element={
                            <React.Suspense fallback="Loading ...">
                                <LazyContacts/>
                            </React.Suspense>}/>
                        <Route path={ROUTES.board} element={<Board/>}
                        />
                        <Route path={`${ROUTES.details}/:id`} element={<Details />} />
                        <Route path={ROUTES.notFound} element={<NotFound/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
