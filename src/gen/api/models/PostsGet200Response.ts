/* tslint:disable */
/* eslint-disable */
/**
 * Symbolic Boilerplate
 * An API spec for managing posts
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@simonball.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Post } from './Post';
import {
    PostFromJSON,
    PostFromJSONTyped,
    PostToJSON,
} from './Post';

/**
 * 
 * @export
 * @interface PostsGet200Response
 */
export interface PostsGet200Response {
    /**
     * 
     * @type {string}
     * @memberof PostsGet200Response
     */
    message: string;
    /**
     * 
     * @type {Array<Post>}
     * @memberof PostsGet200Response
     */
    data: Array<Post>;
}

/**
 * Check if a given object implements the PostsGet200Response interface.
 */
export function instanceOfPostsGet200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostsGet200ResponseFromJSON(json: any): PostsGet200Response {
    return PostsGet200ResponseFromJSONTyped(json, false);
}

export function PostsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'data': ((json['data'] as Array<any>).map(PostFromJSON)),
    };
}

export function PostsGet200ResponseToJSON(value?: PostsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'data': ((value.data as Array<any>).map(PostToJSON)),
    };
}

