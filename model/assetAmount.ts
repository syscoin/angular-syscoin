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
import { AssetInput } from './assetInput';


export interface AssetAmount { 
    /**
     * alias to send to
     */
    aliasto: string;
    /**
     * amount you want to send
     */
    amount?: number;
    /**
     * [{'start':index,'end':index},...]},...]
     */
    ranges?: Array<AssetInput>;
}
