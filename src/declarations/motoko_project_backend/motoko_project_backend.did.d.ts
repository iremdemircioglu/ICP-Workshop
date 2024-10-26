import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Product {
  'id' : bigint,
  'inStock' : boolean,
  'name' : string,
  'description' : string,
  'price' : bigint,
}
export interface _SERVICE {
  'addProduct' : ActorMethod<[string, bigint, string], bigint>,
  'getAllProducts' : ActorMethod<[], Array<Product>>,
  'getProduct' : ActorMethod<[bigint], [] | [Product]>,
  'updateStockStatus' : ActorMethod<[bigint, boolean], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
