export interface INavigation {
  [x: string]: any;
  // dangerouslyGetState(): any;
  reset: (arg0: {
    index: number;
    routes: { name: string; params?: any }[];
  }) => void;
  getParam: (param1: any, param2: any) => any;
  goBack: () => void;
  dispatch: (param: any) => void;
  push: (param1: any, param2?: any) => void;
  addListener: (a: string, b: () => void) => any;
  navigate: (param1: string, param2?: any) => void;
  setOptions: (param: any) => void;
  route: (key: string, name: string, params: any) => void;
  state: any;
}

export interface IApiParams {
  fullUrl?: string;
  method?: string;
  params: any;
  headers?: any;
}
