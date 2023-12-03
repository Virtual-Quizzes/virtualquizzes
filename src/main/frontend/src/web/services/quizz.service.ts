import vqAxiosClient from '../vq-axios-client';

const BASE_CONTEXT = "quizzes";

const QuizzService = {
  get: async (): Promise<any[]>  => {
    const response = await vqAxiosClient.get(`${BASE_CONTEXT}`);
    return response?.data || [];
  },
  create: async (data: any): Promise<any> => {
    const body = { ...data };
    const response = await vqAxiosClient.post(`${BASE_CONTEXT}`, body);
    return response?.data;
  },
  update: async (id: number, data: any): Promise<any> => {
    const body = { ...data };
    const response = await vqAxiosClient.post(`${BASE_CONTEXT}/${id}`, body);
    return response?.data;
  },
}

export default QuizzService;
