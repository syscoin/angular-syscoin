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



export interface TransactionDetailEntry {
    /**
     * DEPRECATED. The account name involved in the transaction, can be \"\" for the default account.
     */
    account?: string;

    /**
     * The syscoin address involved in the transaction
     */
    address?: string;

    /**
     * The category, either 'send' or 'receive'
     */
    category?: string;

    /**
     * The amount in SYS
     */
    amount?: number;

    /**
     * A comment for the address/transaction, if any
     */
    label?: string;

    /**
     * the vout value
     */
    vout?: number;

}
