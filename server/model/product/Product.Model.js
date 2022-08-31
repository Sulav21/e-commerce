import productSchema from "./Product.Schema.js";

export const insertProduct = (obj) => {
  return productSchema(obj).save();
};

export const getProductById=(_id)=>{
    return productSchema.findById(_id)
}

export const getProducts = () => {
  return productSchema.find();
};

export const updateProduct=(filter,obj)=>{
    return productSchema.findOneAndUpdate(filter,obj,{new:true})
}