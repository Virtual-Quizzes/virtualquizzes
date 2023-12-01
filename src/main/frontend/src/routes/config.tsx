// import { Login, SignUp } from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard/Dashboard';
// import { Profile, Settings } from '@/pages/Profile';
import { Groups } from '@/pages/Groups';
import { QuizHome } from '@/pages/Quizzes';
// import { Onboarding, ProfessorOnboarding, StudentOnboarding } from '@/pages/Onboarding/index';
// import TemplateTester from '@/components/TemplateTester/TemplateTester';
// import {TestHome} from '@/pages/Tests';
// import { CreateTestPage } from '@/pages/Tests/Create';
import { extractPageTitles } from '@/utils/extractTitles.util';
import { RouteConfig } from '@/models/routes.model';

export const config: RouteConfig[] = [
  // {
  //   id: 'login',
  //   title: 'Log In',
  //   element: <Login />,
  //   path: '/login',
  //   isPrivate: false,
  // },
  // {
  //   id: 'sign-up',
  //   title: 'Sign Up',
  //   element: <SignUp />,
  //   path: '/signup',
  //   isPrivate: false,
  // },
  // {
  //   id: 'onboarding',
  //   title: 'Onboarding',
  //   element: <Onboarding />,
  //   path: '/onboarding',
  //   isPrivate: true,
  //   children: [
  //     {
  //       id: 'professor-onboarding',
  //       title: 'Onboarding del Profesor',
  //       element: <ProfessorOnboarding />,
  //       path: 'professor-onboarding',
  //       isPrivate: true,
  //     },

  //     {
  //       id: 'student-onboarding',
  //       title: 'Onboarding del Estudiante',
  //       element: <StudentOnboarding />,
  //       path: 'student-onboarding',
  //       isPrivate: true,
  //     },
  //   ],
  // },
  {
    id: 'dashboard',
    title: 'Dashboard',
    element: <Dashboard />,
    path: '/dashboard',
    sidebar: true,
    isPrivate: true,
    iconId: 'dashboard',
  },

  // {
  //   id: 'profile',
  //   title: 'Perfil',
  //   element: <Profile />,
  //   path: '/profile',
  //   topbar: true,
  //   isPrivate: true,
  //   children: [
  //     {
  //       id: 'profile-settings',
  //       title: 'Configuración de Perfil',
  //       element: <Settings />,
  //       path: 'settings',
  //       isPrivate: true,
  //     },
  //   ],
  // },
  {
    id: 'quizzes',
    title: 'Banco',
    element: <QuizHome />,
    path: '/quizzes',
    sidebar: true,
    isPrivate: true,
    iconId: 'quizz',
    //   children: [
    //     {
    //       id: 'quizzes-create',
    //       title: 'Crear Quiz',
    //       element: <QuizzesCreate />,
    //       path: 'create',
    //       isPrivate: true,
    //     },
    //     {
    //       id: 'quizzes-edit',
    //       title: 'Editar Quiz',
    //       element: <QuizzesEditID />,
    //       path: 'edit/{quizId}',
    //       isPrivate: true,
    //     },
    //     {
    //       id: 'quizzes-attempt',
    //       title: 'Resolver Quiz',
    //       element: <QuizAttemptID />,
    //       path: 'quiz-attempt/{quizId}',
    //       isPrivate: true,
    //     },
    //   ],
  },
  {
    id: 'groups',
    title: 'Mi Grupo',
    element: <Groups />,
    path: '/groups',
    sidebar: true,
    isPrivate: true,
    iconId: 'group',
    //   children: [
    //     {
    //       id: 'groups-create',
    //       title: 'Crear Grupo',
    //       element: <GroupsCreate />,
    //       path: 'create',
    //       isPrivate: true,
    //     },
    //     {
    //       id: 'groups-edit',
    //       title: 'Editar Grupo',
    //       element: <GroupsEditID />,
    //       path: 'edit/{groupId}',
    //       isPrivate: true,
    //     },
    //   ],
  },
  // {
  //   id: 'tests',
  //   title: 'Evaluaciones',
  //   element: <TestHome />,
  //   path: '/tests',
  //   sidebar: true,
  //   isPrivate: true,
  //   iconId: "test",
  // children: [
  //     {
  //       id: 'test-create',
  //       title: 'Crear Evaluación',
  //       sidebar: true,
  //       element: <CreateTestPage />,
  //       path: 'new',
  //       isPrivate: true,
  //     },
  //     // {
  //     //   id: 'test-edit',
  //     //   title: 'Crear Evaluación',
  //     //   sidebar: true,
  //     //   element: <CreateTestPage />,
  //     //   path: 'create',
  //     //   isPrivate: true,
  //     // },
  //   ],
  // },
  //       {
  //       id: 'test-create',
  //       title: 'Crear Evaluación',
  //       element: <CreateTestPage />,
  //       path: '/tests/new',
  //       isPrivate: true,
  //     },
];

export const pageTitles = extractPageTitles(config);
export const sidebarMenuOptions = config.filter((ele) => ele.sidebar);
