import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from './Home';
import ExerciseDetail from './ExerciseDetail';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </ReactRoutes>
  );
};
