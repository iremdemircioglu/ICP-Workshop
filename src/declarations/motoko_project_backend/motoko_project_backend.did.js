export const idlFactory = ({ IDL }) => {
  const Product = IDL.Record({
    'id' : IDL.Nat,
    'inStock' : IDL.Bool,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'price' : IDL.Nat,
  });
  return IDL.Service({
    'addProduct' : IDL.Func([IDL.Text, IDL.Nat, IDL.Text], [IDL.Nat], []),
    'getAllProducts' : IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getProduct' : IDL.Func([IDL.Nat], [IDL.Opt(Product)], ['query']),
    'updateStockStatus' : IDL.Func([IDL.Nat, IDL.Bool], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
