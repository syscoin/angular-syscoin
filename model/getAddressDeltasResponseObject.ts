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


export interface GetAddressDeltasResponseObject { 
    /**
     * The difference of satoshis
     */
    satoshis?: string;
    /**
     * The related txid
     */
    txid?: string;
    /**
     * The related input or output index
     */
    index?: number;
    /**
     * The block height
     */
    height?: number;
    /**
     * The base58check encoded address
     */
    address?: string;
}
