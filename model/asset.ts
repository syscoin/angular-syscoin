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


export interface Asset { 
    guid: string;
    symbol?: string;
    txid?: string;
    height?: number;
    time?: number;
    publicvalue?: string;
    category?: string;
    alias?: string;
    balance?: number;
    total_supply?: number;
    max_supply?: number;
    interest_rate?: number;
    can_adjust_interest_rate?: boolean;
    use_input_ranges?: boolean;
    inputs?: Array<AssetInput>;
    precision?: number;
}
