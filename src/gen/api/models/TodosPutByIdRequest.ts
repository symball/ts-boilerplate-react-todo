/* tslint:disable */
/* eslint-disable */
/**
 * Symbolic Boilerplate
 * An API spec for managing todo lists
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@simonball.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TodosPutByIdRequest
 */
export interface TodosPutByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof TodosPutByIdRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof TodosPutByIdRequest
     */
    content?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TodosPutByIdRequest
     */
    complete?: boolean;
}

/**
 * Check if a given object implements the TodosPutByIdRequest interface.
 */
export function instanceOfTodosPutByIdRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TodosPutByIdRequestFromJSON(json: any): TodosPutByIdRequest {
    return TodosPutByIdRequestFromJSONTyped(json, false);
}

export function TodosPutByIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TodosPutByIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'complete': !exists(json, 'complete') ? undefined : json['complete'],
    };
}

export function TodosPutByIdRequestToJSON(value?: TodosPutByIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'content': value.content,
        'complete': value.complete,
    };
}

