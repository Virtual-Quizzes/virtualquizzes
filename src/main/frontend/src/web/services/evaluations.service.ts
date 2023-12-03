import vqAxiosClient from '../vq-axios-client';

const BASE_CONTEXT = "evaluations";

const EvaluationService = {
  get: async (): Promise<any[]>  => {
    const response = await vqAxiosClient.get(`${BASE_CONTEXT}`);
    return response?.data || [];
  },
  getById: async (id: number): Promise<any>  => {
    const response = await vqAxiosClient.get(`${BASE_CONTEXT}/${id}`);
    return response?.data || {};
  },
  create: async (data: any): Promise<any> => {
    const body = { ...data };
    const response = await vqAxiosClient.post(`${BASE_CONTEXT}`, body);
    return response?.data;
  },
  attempt:  async (id: number, body: any): Promise<any[]>  => {
    const response = await vqAxiosClient.put(`${BASE_CONTEXT}/${id}`, body);
    return response?.data || [];
  },
}

// {
//     quizz_id: 4,
//     "question_id": 36,
//     "response": "A"

// }

export default EvaluationService;
