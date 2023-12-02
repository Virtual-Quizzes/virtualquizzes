import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { MainContainer } from '@/Layouts/MainContainer';
import Dashboard from '@/pages/Dashboard/Dashboard';
import { QuizHome } from '@/pages/Quizzes';
import { CreateTestPage, TestHome } from '@/pages/Tests';
import { Groups } from '@/pages/Groups';
import { ForgotPassword, Login, SignUp } from '@/pages/Auth';
import { AuthLayout } from '@/Layouts/AuthLayout';
import { OnboardingLayout } from '@/Layouts/OnboardingLayout';
import { Onboarding } from '@/pages/Onboarding';
import { AviablePage } from '@/pages/Tests/Aviable';
import { AtempPage } from '@/pages/Tests/Atemp';

// const createRoutesFromConfig = (routes: RouteConfig[]) => {
//   return routes.map((route) => {
//     if (route.children) {
//       const elementWithNestedRoutes = (
//         <Route
//           key={route.id}
//           path={route.path}
//           element={route.element}>
//               {createRoutesFromConfig(route.children)}
//           </Route>
//       );
//       return elementWithNestedRoutes;
//     }
//     return <Route key={route.id} path={route.path} element={route.element} />;
//   });
// };

const Routing = () => {
  return (
    <React.Fragment>
    <Router>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<MainContainer />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="quizzes" element={<QuizHome />} />
        <Route path="tests" element={<TestHome />} />
        <Route path="tests/new" element={<CreateTestPage />} />
        <Route path="evaluations" element={<AviablePage />} />
        <Route path="evaluations/attempt/:pruebaId" element={<AtempPage />} />
      </Route>

      <Route element={<OnboardingLayout />}>
        <Route path="onboarding" element={<Onboarding />} />
      </Route>

      <Route path="*" element={<h1>404</h1>} />
    </Router>
    </React.Fragment>
  );
};

export default Routing;