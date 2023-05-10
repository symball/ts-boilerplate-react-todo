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
 * @interface TodoPost
 */
export interface TodoPost {
    /**
     * 
     * @type {string}
     * @memberof TodoPost
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof TodoPost
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof TodoPost
     */
    content: string;
}

/**
 * Check if a given object implements the TodoPost interface.
 */
export function instanceOfTodoPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function TodoPostFromJSON(json: any): TodoPost {
    return TodoPostFromJSONTyped(json, false);
}

export function TodoPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TodoPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'summary': json['summary'],
        'content': json['content'],
    };
}

export function TodoPostToJSON(value?: TodoPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'summary': value.summary,
        'content': value.content,
    };
}

