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
import { TestHome } from '@/pages/Tests';
import SRoleService from '@/web/services/simulator-rol.service';

const role = SRoleService.getRole();

export const config: RouteConfig[] = role === "PROFESSOR" ? [
  {
    id: 'dashboard',
    title: 'Dashboard',
    element: <Dashboard />,
    path: '/dashboard',
    sidebar: true,
    isPrivate: true,
    iconId: 'dashboard',
  },
  { 
    id: 'tests',
    title: 'Evaluaciones',
    element: <TestHome />,
    path: '/tests',
    sidebar: true,
    isPrivate: true,
    iconId: 'quizz',
  },
  {
    id: 'quizzes',
    title: 'Banco',
    element: <QuizHome />,
    path: '/quizzes',
    sidebar: true,
    isPrivate: true,
    iconId: 'quizz',
  },
] : [
  {
    id: 'dashboard',
    title: 'Dashboard',
    element: <Dashboard />,
    path: '/dashboard',
    sidebar: true,
    isPrivate: true,
    iconId: 'dashboard',
  },
  { 
    id: 'quizzes',
    title: 'Evaluaciones',
    element: <TestHome />,
    path: '/evaluations',
    sidebar: true,
    isPrivate: true,
    iconId: 'quizz',
  },
  { 
    id: 'quizzes',
    title: 'Rendir Prueba',
    element: <TestHome />,
    path: '/evaluations/attempt',
    sidebar: false,
    isPrivate: true,
    iconId: 'quizz',
  },
]

export const pageTitles = extractPageTitles(config);
export const sidebarMenuOptions = config.filter((ele) => ele.sidebar);
