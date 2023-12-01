export interface RouteConfig {
  id: string;
  title: string;
  element: React.ReactElement;
  path: string;
  isPrivate: boolean;
  children?: RouteConfig[];
  sidebar?: boolean;
  topbar?: boolean;
  iconId?: string;
  layout?: React.ReactNode;
}

//
export type PathToTitleMap = {
  [path: string]: string;
};
