import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '~/routes/routes';
import DefaultLayout from '~/components/layout/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
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
