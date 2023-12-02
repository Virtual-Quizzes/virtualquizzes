import vqAxiosClient from '../vq-axios-client';

const BASE_CONTEXT = "studentgroups";
const ADD_STUDENTS = "addStudents";

const GroupService = {
  get: async (): Promise<any[]>  => {
    const response = await vqAxiosClient.get(`${BASE_CONTEXT}`);
    return response?.data || [];
  },
  create: async (data: any): Promise<any> => {
    const body = { ...data };
    const response = await vqAxiosClient.post(`${BASE_CONTEXT}`, body);
    return response?.data;
  },
  addStudentsToGroupId:  async (groupId: number, idsToAdd: number[]): Promise<any[]>  => {
    const response = await vqAxiosClient.post(`${BASE_CONTEXT}/${groupId}/${ADD_STUDENTS}`, {
        ids: [...idsToAdd]
    });
    return response?.data || [];
  },
}

export default GroupService;
