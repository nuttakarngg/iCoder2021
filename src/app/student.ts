export interface Student {
  createBy?: any;
  createDate?: string;
  email: string;
  id?: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: string;
  version?: number;
}
export interface StudentResponse {
  result: Result[];
}

interface Result {
  createBy?: any;
  createDate?: string;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: string;
  version: number;
}

export interface StudentCondition {
  name?: string;
  email?: string;
  tel?: string;
}

export interface StudentAdd {
  result: StudentResult;
}

interface StudentResult {
  createBy?: any;
  createDate?: any;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: any;
  version: number;
}
export interface ResponseEditStudent {
  result: StudentEditResult;
}

interface StudentEditResult {
  createBy?: any;
  createDate?: any;
  email: string;
  id: number;
  name: string;
  tel: string;
  updateBy?: any;
  updateDate?: any;
  version: number;
}
