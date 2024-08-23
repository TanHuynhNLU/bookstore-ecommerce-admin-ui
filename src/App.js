import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes, routes } from '~/routes/routes';
import DefaultLayout from '~/components/layout/DefaultLayout';
import { Fragment } from 'react';
import RequireAuth from './components/HOC/RequireAuth';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <RequireAuth>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </RequireAuth>
                                }
                            />
                        );
                    })}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
