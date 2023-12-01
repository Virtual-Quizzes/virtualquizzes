import { PathToTitleMap, RouteConfig } from '@/models/routes.model';

export const extractPageTitles = (routes: RouteConfig[], parentPath: string = ''): PathToTitleMap => {
  let pathToTitleMapping: PathToTitleMap = {};

  routes.forEach((route) => {
    const fullPath = `${parentPath}${route.path}`;
    pathToTitleMapping[fullPath] = route.title;
    console.log(fullPath, pathToTitleMapping);
    if (route.children) {
      pathToTitleMapping = {
        ...pathToTitleMapping,
        ...extractPageTitles(route.children, `${fullPath}/`),
      };
    }
  });

  return pathToTitleMapping;
};
