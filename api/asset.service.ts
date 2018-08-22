/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Asset } from '../model/asset';
import { AssetAllocation } from '../model/assetAllocation';
import { AssetAllocationCollectInterestRequest } from '../model/assetAllocationCollectInterestRequest';
import { AssetAllocationSenderStatus } from '../model/assetAllocationSenderStatus';
import { AssetNewRequest } from '../model/assetNewRequest';
import { AssetSendRequest } from '../model/assetSendRequest';
import { AssetTransferRequest } from '../model/assetTransferRequest';
import { AssetUpdateRequest } from '../model/assetUpdateRequest';
import { ErrorResponse } from '../model/errorResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AssetService {

    protected basePath = 'http://localhost:8001';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Collect interest on this asset allocation if an interest rate is set on this asset.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetallocationcollectinterest(request: AssetAllocationCollectInterestRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public assetallocationcollectinterest(request: AssetAllocationCollectInterestRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public assetallocationcollectinterest(request: AssetAllocationCollectInterestRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public assetallocationcollectinterest(request: AssetAllocationCollectInterestRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling assetallocationcollectinterest.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<string>>(`${this.basePath}/assetallocationcollectinterest`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Show stored values of a single asset allocation. Set getinputs to true if you want to get the allocation inputs, if applicable.
     * @param asset 
     * @param alias 
     * @param getinputs 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetallocationinfo(asset: string, alias: string, getinputs: boolean, observe?: 'body', reportProgress?: boolean): Observable<AssetAllocation>;
    public assetallocationinfo(asset: string, alias: string, getinputs: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssetAllocation>>;
    public assetallocationinfo(asset: string, alias: string, getinputs: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssetAllocation>>;
    public assetallocationinfo(asset: string, alias: string, getinputs: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling assetallocationinfo.');
        }
        if (alias === null || alias === undefined) {
            throw new Error('Required parameter alias was null or undefined when calling assetallocationinfo.');
        }
        if (getinputs === null || getinputs === undefined) {
            throw new Error('Required parameter getinputs was null or undefined when calling assetallocationinfo.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (asset !== undefined && asset !== null) {
            queryParameters = queryParameters.set('asset', <any>asset);
        }
        if (alias !== undefined && alias !== null) {
            queryParameters = queryParameters.set('alias', <any>alias);
        }
        if (getinputs !== undefined && getinputs !== null) {
            queryParameters = queryParameters.set('getinputs', <any>getinputs);
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<AssetAllocation>(`${this.basePath}/assetallocationinfo`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Send an asset you own to another alias as an asset allocation.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetallocationsend(request: AssetSendRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public assetallocationsend(request: AssetSendRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public assetallocationsend(request: AssetSendRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public assetallocationsend(request: AssetSendRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling assetallocationsend.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<string>>(`${this.basePath}/assetallocationsend`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Show status as it pertains to any current Z-DAG conflicts or warnings related to a sender or sender/txid combination of an asset allocation transfer. Leave txid empty if you are not checking for a specific transfer. Return value is in the status field and can represent 4 levels(-1:Not Found, 0:OK, 1:Warning or 2:Critical)
     * @param asset 
     * @param sender 
     * @param txid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetallocationsenderstatus(asset: string, sender: string, txid: string, observe?: 'body', reportProgress?: boolean): Observable<AssetAllocationSenderStatus>;
    public assetallocationsenderstatus(asset: string, sender: string, txid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AssetAllocationSenderStatus>>;
    public assetallocationsenderstatus(asset: string, sender: string, txid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AssetAllocationSenderStatus>>;
    public assetallocationsenderstatus(asset: string, sender: string, txid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling assetallocationsenderstatus.');
        }
        if (sender === null || sender === undefined) {
            throw new Error('Required parameter sender was null or undefined when calling assetallocationsenderstatus.');
        }
        if (txid === null || txid === undefined) {
            throw new Error('Required parameter txid was null or undefined when calling assetallocationsenderstatus.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (asset !== undefined && asset !== null) {
            queryParameters = queryParameters.set('asset', <any>asset);
        }
        if (sender !== undefined && sender !== null) {
            queryParameters = queryParameters.set('sender', <any>sender);
        }
        if (txid !== undefined && txid !== null) {
            queryParameters = queryParameters.set('txid', <any>txid);
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<AssetAllocationSenderStatus>(`${this.basePath}/assetallocationsenderstatus`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Show stored values of a single asset and its. Set getinputs to true if you want to get the allocation inputs, if applicable.
     * @param asset 
     * @param getinputs 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetinfo(asset: string, getinputs: boolean, observe?: 'body', reportProgress?: boolean): Observable<Asset>;
    public assetinfo(asset: string, getinputs: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Asset>>;
    public assetinfo(asset: string, getinputs: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Asset>>;
    public assetinfo(asset: string, getinputs: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling assetinfo.');
        }
        if (getinputs === null || getinputs === undefined) {
            throw new Error('Required parameter getinputs was null or undefined when calling assetinfo.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (asset !== undefined && asset !== null) {
            queryParameters = queryParameters.set('asset', <any>asset);
        }
        if (getinputs !== undefined && getinputs !== null) {
            queryParameters = queryParameters.set('getinputs', <any>getinputs);
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Asset>(`${this.basePath}/assetinfo`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Create a new Syscoin Asset.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetnew(request: AssetNewRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public assetnew(request: AssetNewRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public assetnew(request: AssetNewRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public assetnew(request: AssetNewRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling assetnew.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<string>>(`${this.basePath}/assetnew`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Send an asset allocation you own to another alias.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetsend(request: AssetSendRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public assetsend(request: AssetSendRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public assetsend(request: AssetSendRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public assetsend(request: AssetSendRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling assetsend.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<string>>(`${this.basePath}/assetsend`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Transfer asset from one user to another.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assettransfer(request: AssetTransferRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public assettransfer(request: AssetTransferRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public assettransfer(request: AssetTransferRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public assettransfer(request: AssetTransferRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling assettransfer.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<string>>(`${this.basePath}/assettransfer`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Perform an update on an asset you control.
     * @param request 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public assetupdate(request: AssetUpdateRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public assetupdate(request: AssetUpdateRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public assetupdate(request: AssetUpdateRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public assetupdate(request: AssetUpdateRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling assetupdate.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers = headers.set('token', this.configuration.apiKeys["token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<string>>(`${this.basePath}/assetupdate`,
            request,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
