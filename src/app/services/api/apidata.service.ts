import { Injectable, ErrorHandler } from '@angular/core';

import axios from 'axios';
import { AxiosInstance } from 'axios';

export interface Params {
    [key: string]: any;
}
export interface GetOptions {
    url: string;
    params?: Params;
}

export interface ErrorResponse {
    id: string;
    code: string;
    message: string;
}

@Injectable({
    providedIn: 'root',
})
export class ApidataService {
    private axiosClient: AxiosInstance;

    constructor(private errorHandler: ErrorHandler) {
        this.axiosClient = axios.create({
            timeout: 3000,
            headers: {
                'X-Initialized-At': Date.now().toString(),
            },
        });
    }

    // public methode
    public async get<T>(options: GetOptions): Promise<T> {
        try {
            const axiosResponse = await this.axiosClient.request<T>({
                method: 'get',
                url: options.url,
                params: options.params,
            });
            return axiosResponse.data;
        } catch (error) {
            return Promise.reject(this.normalizeError(error));
        }
    }

    // private methode
    private normalizeError(error: any): ErrorResponse {
        this.errorHandler.handleError(error);
        return {
            id: '-1',
            code: 'UnknowError',
            message: 'An unexpectied error occured',
        };
    }
}
