import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

export async function useQuery(
	methodName: string,
	args?: Json | null,
	variables?: Json | null,
	field?: string[] | null
) {
	return main('query', methodName, args, variables, field);
}

export async function useMutation(
	methodName: string,
	args?: Json | null,
	variables?: Json | null,
	field?: string[] | null
) {
	return main('mutation', methodName, args, variables, field);
}

async function main(
	scheme: 'query' | 'mutation',
	methodName: string,
	args?: Json | null,
	variables?: Json | null,
	field?: string[] | null
) {
	args = args ?? {};
	variables = variables ?? {};
	field = field ?? ['response', 'jwt'];
	const queryString = jsonToGraphQLQuery({
		[methodName]: {
			__args: args
		}
	});
	axios.interceptors.request.clear();
	axios.interceptors.request.use((config) => {
		return config;
	});
	axios.interceptors.response.clear();
	axios.interceptors.response.use(
		async (response: AxiosResponse) => {
			return response;
		},
		(error: AxiosError) => {
			return Promise.reject(error);
		}
	);
	const response = await axios.post('https://api.replie.net/graphql', {
		query: `${scheme} {${queryString}{${field.join('\n')}}}`,
		variables
	});
	return handleResponse(methodName, response);
}

function handleResponse(
	methodName: string,
	response: AxiosResponse<{
		data?: {
			[key: string]: { response: any; jwt: any };
		};
		errors?: any[];
	}>
) {
	const data = response.data.data?.[methodName];
	if (data) {
		return data['response'] ?? null;
	}
}
